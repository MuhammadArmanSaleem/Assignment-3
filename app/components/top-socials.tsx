import Image from "next/image";

export default function Socials () {
  return (
<div>
<div className="top-socials flex items-center justify-between ">
  
  <div className="ml-12 flex items-center space-x-4">
    <span>Follow us:</span>

    <div className="facebook">
      <a href="https://www.facebook.com">
        <button className="rounded-full">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
            alt="Facebook Logo"
            className="h-6 w-6"
          />
        </button>
      </a>
    </div>

    <div className="linkedin">
      <a href="https://www.linkedin.com">
        <button className="rounded-full">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg"
            alt="LinkedIn Logo"
            className="h-6 w-6"
          />
        </button>
      </a>
    </div>

    <div className="gmail">
      <a href="mailto:your-email@gmail.com">
        <button className="rounded-full">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png"
            alt="Gmail Logo"
            className="h-6 w-6"
          />
        </button>
      </a>
    </div>
  </div>


  <div className="flex space-x-4 mr-12">
    <button className="rounded-full  items-center space-x-2">
      <img src="" alt="" />
      <span>+988986598</span>
    </button>

    <button className="rounded-full items-center space-x-2">
      <img src="" alt="" />
      <span>+54545118</span>
    </button>
  </div>
</div>
<hr />



</div>
  );
}

