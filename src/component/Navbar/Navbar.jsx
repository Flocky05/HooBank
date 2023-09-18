
import img from "../../assets/logo.svg"
const Navbar = () => {
    return (
        <div className="flex justify-between p-12 bg-blue-950 text-white items-center">
            <img className="h-12" src={img} alt="" />
            <div className="grid grid-cols-4 text-xl font-semibold w-3/5">
                <a href="/">Home</a>
                <a href="/about-us">About Us</a>
                <a href="/features">Features</a>
                <a href="/solutions">Solutions</a>
            </div>
        </div>
    );
};

export default Navbar;