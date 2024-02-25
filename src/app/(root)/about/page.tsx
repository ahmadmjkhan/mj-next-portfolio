import { timeline } from "@/app/constants";
import SectionHeading from "@/components/SectionHeading";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About-MJ",
};

const about = () => {
  return (
    <>
      <section className="max-width section-padding flex flex-col tablet:flex-row gap-20 items-center">
        <div className="relative w-full tablet:w-1/2 h-[calc(300px+20vw)] tablet:h-[600px]">
          <Image
            src={"/images/about.png"}
            fill
            alt="about img"
            className="objec-cover"
          />
        </div>

        <div className="tablet:w-1/2">
          <div className="space-y-3 max-tablet:text-center flex flex-col">
            <p className="px-4 py-2 bg-peach-500 text-grey-600 w-max rounded tabelt:w-max max-tablet:mx-auto">
              Welcome to the World Development
            </p>
            <h1 className="text-grey-700">I'm Junaid Ahmad</h1>
            <p className="text-grey-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
              accusantium, ipsam aliquam enim est magni natus ad delectus,
              facere similique nulla. Nam, et provident? Magnam voluptatibus
              doloremque quam assumenda voluptas, blanditiis commodi vitae,
              ipsam recusandae sit aliquam eos est ipsa! Temporibus, saepe.
            </p>
          </div>

          <div className="bg-peach-400 rounded-lg tablet:rounded-none tablet:bg-transparent tablet:border-t-2 tablet:border-b-2 tablet:border-purple w-full py-8 px-10 mt-14 tablet:mt-24 gap-12 flex flex-col tablet:flex-row">
            <div className="flex items-center gap-10 justify-center tablet:block">
              <h3 className="text-grey-700">
                55 <span className="text-purple">+</span>
              </h3>
              <p className="text-grey-600">Project Complete</p>
            </div>
            <div className="flex items-center gap-10 justify-center tablet:block">
              <h3 className="text-grey-700">
                55 <span className="text-purple">+</span>
              </h3>
              <p className="text-grey-600">Happy Customers</p>
            </div>
            <div className="flex items-center gap-10 justify-center tablet:block">
              <h3 className="text-grey-700">
                55 <span className="text-purple">+</span>
              </h3>
              <p className="text-grey-600">Year of Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* milestone section */}

      <section className="max-width section-padding">
        <SectionHeading title="MileStone of My Career" subtitle="Lorem Here" />

        <div className="spac-y-8 relative before:absolute before:inset-0 before:ml-5 before:translate-x-px tablet:before:mx-auto tablet:before:translate-x-0 before:h-full before:w-0.5 before:bg-purple before:bg-opacity-30">
          {timeline.map((item, index) => (
            <div
              key={index}
              className="relative flex items-center justify-between tablet:justify-normal tablet:odd:flex-row-reverse group"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-peach-400 shrink-0 tablet:order-1 tablet:group-odd:-translate-x-1/2 tablet:group-even:translate-x-1/2 group-first:before:absolute group-first:before:w- group-first:before:h-20 group-first:before:bottom-full group-first:before:bg-peach-600 group-last:before:absolute group-last:before:w-1 group-last:before:h-20 group-last:before:bottom-full group-last:before:top-full group-last:before:bg-peach-600">
                <span className="w-3 h-3 bg-purple rounded-full"></span>
              </div>

              <div className="w-[calc(1005-4rem)] tablet:w-[calc(50%-2.5rem)] box ~p-5 tablet:~p-8">
                <div className="flex items-center justify-between space-x-2 mb-1">
                  <h6 className="text-grey-700">{item.title}</h6>
                  <p className="font-semibold text-purple">{item.duration}</p>
                </div>

                <div className="text-grey-600">{item.description}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default about;