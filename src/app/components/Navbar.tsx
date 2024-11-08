export default function Navbar(): JSX.Element {
    return (
        <div className="flex justify-between items-center bg-gray-800 p-4">
            <div className="flex items-center">
                <h1 className="text-white text-2xl ml-2">Spaak</h1>
            </div>
            <div className="flex items-center">
                <button className="text-white text-sm mr-4">Sign in</button>
                <button className="text-white text-sm">Sign up</button>
            </div>
        </div>
    );
}