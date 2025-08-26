"use client";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

export default function NewsDetail() {
  return (
    <div className="relative">
      {/* Background */}
      <Image
        src="/images/Background.png"
        alt="Background"
        fill
        className="absolute -z-10 object-cover"
      />

      <div className="w-[80%] mx-auto py-20">
        {/* Title + Breadcrumb */}
        <div className="space-y-2">
          <p className="text-4xl">
            Crosson Holding’s 58th ordinary general <br /> assembly convened
          </p>
          <p className="flex items-center gap-2 text-xs text-gray-700">
            <span>Home</span>
            <FaArrowRight />
            <span>News</span>
            <FaArrowRight />
            <span>
              Crosson Holding’s 58th ordinary general assembly convened
            </span>
          </p>
        </div>

        {/* Main Image */}
        <div className="my-4">
          <Image
            src="/images/newsdetail/Rectangle 7.png"
            alt="News Detail"
            width={1200}
            height={600}
            className="w-full"
          />
        </div>

        {/* Content */}
        <div>
          <p className="text-2xl font-medium mb-4">
            At the roots of Crosson, there is 20 years of experience in food
            industry that is filled with research, increasing efficiency and
            producing solution for food, quality, automation and software.
          </p>
          <p className="leading-relaxed text-gray-700">
            Donut candy shortbread toffee dragée apple pie brownie. Muffin
            chocolate halvah bonbon gummies cake apple pie. Croissant dessert
            candy canes chocolate bar topping jujubes cupcake toffee dragée.
            Fruitcake danish tart gummies tootsie roll dragée cheesecake
            jujubes. Fruitcake powder marzipan dessert dessert oat cake candy.
            Sweet roll sweet roll gummi bears tootsie roll dragée. Candy canes
            brownie danish pudding jelly gummies.
            <br /> <br />
            Toffee jelly caramels macaroon bonbon dragée muffin halvah. Pudding
            icing gingerbread sugar plum powder marzipan. Cotton candy carrot
            cake pastry carrot cake jelly danish. Ice ceam muffin marshmallow
            sesame snaps pie cupcake tart. Lemon drops macaroon lemon drops
            chocolate cookie cupcake marshmallow donut. Cotton candy candy canes
            cake oat cake jelly.
            <br /> <br />
            Muffin chocolate halvah bonbon gummies cake apple pie. Croissant
            dessert candy canes chocolate bar topping jujubes cupcake toffee
            dragée. Fruitcake danish tart gummies tootsie roll dragée cheesecake
            jujubes. Fruitcake powder marzipan dessert dessert oat cake candy.
            Sweet roll sweet roll gummi bears tootsie roll dragée. Candy canes
            brownie danish pudding jelly gummies.
            <br /> <br />
            Pudding icing gingerbread sugar plum powder marzipan. Cotton candy
            carrot cake pastry carrot cake jelly danish. Ice cream muffin
            marshmallow sesame snaps pie cupcake tart. Lemon drops macaroon
            lemon drops chocolate cookie cupcake marshmallow donut. Cotton candy
            candy canes cake oat cake jelly.
          </p>
        </div>

        {/* Related News */}
        <div className="my-10">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-4xl mb-4 relative inline-block pb-2 after:content-[''] after:absolute after:bottom-[-15px] after:left-0 after:w-[40%] after:h-[14px] after:bg-yellow-400">
                Related News
              </p>
              <p className="text-gray-700">
                Cake pudding lollipop pastry cupcake chocolate. Gummi bears
                halvah sesame snaps <br /> chocolate cake gummies sugar plum
                cotton candy cupcake sweet
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-10 my-10">
            {/* Related Item 1 */}
            <div className="w-full flex gap-10 items-center">
              <div>
                <Image
                  src="/images/main/Image (1).png"
                  alt="Related News 1"
                  width={250}
                  height={200}
                  className="rounded"
                />
              </div>
              <div className="space-y-4">
                <p className="text-xl">
                  Crosson Holding’s 58th ordinary general assembly convened
                </p>
                <p className="text-gray-600">
                  Toffee sweet roll caramels oat cake lemon drops cupcake sweet
                  roll halvah ice cream.
                </p>
                <a
                  href="#"
                  className="bg-[#FCD900] w-3/4 flex items-center gap-10 justify-between px-10 py-2 font-medium"
                >
                  Read More <FaArrowRight />
                </a>
              </div>
            </div>

            {/* Related Item 2 */}
            <div className="w-full flex gap-10 items-center">
              <div>
                <Image
                  src="/images/main/Image (2).png"
                  alt="Related News 2"
                  width={250}
                  height={200}
                  className="rounded"
                />
              </div>
              <div className="space-y-4">
                <p className="text-xl">
                  Crosson Holding’s new Board of Directors has been determined.
                </p>
                <p className="text-gray-600">
                  Toffee sweet roll caramels oat cake lemon drops cupcake sweet
                  roll halvah ice cream.
                </p>
                <a
                  href="#"
                  className="bg-[#FCD900] w-3/4 flex items-center gap-10 justify-between px-10 py-2 font-medium"
                >
                  Read More <FaArrowRight />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
