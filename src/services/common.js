import { parse, format } from 'date-fns';


const formatCategoryString = (category) => {
  let cat = category.split('->');
  return cat[cat.length - 1].trim();
}

export const formatCategory = (category) => {
  if (Array.isArray(category)) {
    let finalCategory = category.map((item) => {
      return formatCategoryString(item);
    });
    return finalCategory
  }
  
  if (typeof category === "string") {
    return formatCategoryString(category);
  }
}

// EXAMPLE AND HOW TO CALL
// const dateString = "Wed, 31 Jul 2024 10:12:38 +0200";
// const formattedDate = convertDate(dateString);
export const convertDate = (dateString) => {
  const parsedDate = parse(dateString, "EEE, dd MMM yyyy HH:mm:ss X", new Date());
  const formattedDate = format(parsedDate, "dd.MM.yyyy");
  
  return formattedDate;
};

export function cleanObject(obj) {
  const cleanedObj = { ...obj };
  for (let key in cleanedObj) {
    if (
      (cleanedObj[key] === "" && !Array.isArray(cleanedObj[key])) ||
      /^\s+$/.test(cleanedObj[key])
    ) {
      delete cleanedObj[key];
    } else if (Array.isArray(cleanedObj[key]) && cleanedObj[key].length > 0) {
      cleanedObj[key] = cleanedObj[key].filter((item) => {
        if (typeof item === "object") {
          const cleanedItem = cleanObject(item);
          return Object.keys(cleanedItem).length > 0;
        }
        return item !== "" && !/^\s+$/.test(item);
      });
    }
  }
  return cleanedObj;
}


export const categoryMappings = [
  { name: 'Planen & Bauen', icon: 'Planning & Building.svg' }, // planning and building
  { name: 'Bibliotheken', icon: 'Libraries.svg' }, // library
  { name: 'Bildung', icon: 'Education.svg' }, // Education
  { name: 'Bürgerdienste', icon: 'Citizen Services.svg' }, // citizen services
  { name: 'Freizeit & Sport', icon: 'Leisure & Sports.svg' }, // Leisure and Sports
  { name: 'Gesundheit & Beratung', icon: 'Health & Counseling.svg' }, // Health and Counselling
  { name: 'Familien & Kinder', icon: 'Families & Children.svg' }, // families and children
  { name: 'Klima & Umwelt', icon: 'Climate & Environment.svg' }, // climate and environment
  { name: 'Stadtarchiv', icon: 'City Archive.svg' }, // city archive
  { name: 'Veranstaltungen', icon: 'City events.svg' }, // events
  { name: 'Welterbe SchUM-Stätten', icon: 'SchUM World Heritage Sites.svg' }, // SchUM World Heritage Sites
  { name: 'Wirtschaft', icon: 'Business.svg' }, // business
  { name: 'Kultur', icon: 'Culture.svg' }, // culture
  { name: 'Luther', icon: 'Luther.svg' }, // luther
  { name: 'Musikschule', icon: 'Music School.svg' }, // Music School
  { name: 'Senioren', icon: 'Senior citizens.svg' }, // senior citizen
  { name: 'Stadtteile', icon: 'health_and_advice.svg' }, // Neighbourhood
  { name: 'Tourismus', icon: 'Tourism & Events.svg' }, // Tourism and events
  { name: 'Verkehrsinfos', icon: 'Traffic information.svg' }, // traffic information
  { name: 'Wahlen', icon: 'Elections.svg' }, // elections
];


export const mapCategoryIcons = (catName) => {
  const category = categoryMappings.find(mapping => mapping.name === catName);
  return category ? category.icon : 'health_and_advice.svg';
}
