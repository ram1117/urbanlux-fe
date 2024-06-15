import ImageWrapper from "@/atoms/ImageWrapper";
import IconFb from "@public/icons/iconfb.svg";
import IconInsta from "@public/icons/iconinsta.svg";
import IconSnap from "@public/icons/iconsnap.svg";
import IconYt from "@public/icons/iconyt.svg";

const Footer = () => {
  return (
    <footer className="min-h-[50vh] bg-dark text-light p-4 lg:p-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Logo,Address and social pages */}
        <div className="flex flex-col gap-4">
          <div className="flex uppercase text-lg lg:text-2xl font-cantarell">
            <h2 className="border p-1 text-dark bg-light">Urban</h2>
            <h2 className="border-r border-y p-1 text-light">Trend</h2>
          </div>
          <div>
            <p>11,XYZ Street,</p>
            <p>Conner Infotech Park,</p>
            <p>Buffalo, NY,</p>
            <p>14213</p>
          </div>
          <div className="flex flex-row gap-4 items-center">
            <ImageWrapper
              src={IconFb}
              alt={"Facebook icon"}
              imageSize="h-6 w-6 lg:h-8 lg:w-8"
            />
            <ImageWrapper
              src={IconInsta}
              alt={"Instagram icon"}
              imageSize="h-6 w-6 lg:h-8 lg:w-8"
            />
            <ImageWrapper
              src={IconSnap}
              alt={"Snapchat icon"}
              imageSize="h-6 w-6 lg:h-8 lg:w-8"
            />
            <ImageWrapper
              src={IconYt}
              alt={"Youtube icon"}
              imageSize="h-6 w-6 lg:h-8 lg:w-8"
            />
          </div>
        </div>

        {/* About company section */}

        <div className="">
          <h4 className="text-lg font-semibold">Company</h4>
          <ul className="my-4 flex flex-col gap-2">
            <li>About</li>
            <li>Terms</li>
            <li>Return Policy</li>
            <li>Support</li>
          </ul>
        </div>

        {/* Store details */}
        <div>
          <h4 className="text-lg font-semibold">Store Details</h4>
          <div className="grid grid-cols-2 gap-4 py-4 text-sm lg:text-base">
            <div>
              <h6 className="font-semibold">Address</h6>
              <p>35A,Downtown Avenue,</p>
              <p>Buffalo</p>
            </div>
            <div>
              <h6 className="font-semibold">Phone</h6>
              <p>+1-456-789-01234</p>
            </div>
            <div>
              <h6 className="font-semibold">Email</h6>
              <p>UrbanTrendz@outlook.com</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
