import { Link, useLocation } from "react-router-dom"

function NavBar({ navProps }) {
    const { handleSearch, setSearchText, searchText } = navProps
    const { pathname } = useLocation();

    let content;
    if (pathname === '/') {
        content = <label className="input input-bordered flex items-center gap-2">
            <form onSubmit={handleSearch} >
                <input
                    onChange={(e) => setSearchText(e.target.value)}
                    type="text"
                    value={searchText}
                    className="grow"
                    placeholder="Search By Meal" />
            </form>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
        </label>
    }


    return (
        <div className="navbar bg-base-100 w-11/12 mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {/* <label className="input input-bordered flex items-center gap-2">
                            <form onSubmit={handleSearch} >
                                <input
                                    onChange={(e) => setSearchText(e.target.value)}
                                    value={searchText}
                                    type="text"
                                    className="grow"
                                    placeholder="Search By Meal" />
                            </form>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                        </label> */}
                        {content}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost text-xl">Baper Hotel</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {content}
                </ul>
            </div>
            <div className="navbar-end">
                <Link to='/' className="btn">Home</Link>
            </div>
        </div>
    )
}

export default NavBar
