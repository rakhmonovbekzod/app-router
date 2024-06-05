import Link from "next/link";

const AboutPage = () => {
  return (
    <div>
      <h2>About</h2>
      <p>
        <Link href="/about/product/cards/1">
          <div className="ml-100"> fdfdfdf</div>
        </Link>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum nemo
        ratione repellat, dignissimos dolore iusto iste dicta quas aperiam id
        amet porro eligendi facilis voluptate delectus velit repudiandae quam
        tenetur!
      </p>
    </div>
  );
};

export default AboutPage;
