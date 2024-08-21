import ViewNews from "@/components/ViewNews";

const page = async ({ searchParams }) => {
  let { title, date, description, text, image } = searchParams;
  return (
    <ViewNews
      title={title}
      date={date}
      description={description}
      text={text}
      image={image}
    />
  );
};

export default page;
