import logo from '../images/redditlogo.png';
import get_Data from "../mjs/data.mjs";

export default function Header({ name, setName, setRes1 }) {

    const handleSubmit=async(e)=>{
        e.preventDefault();
        const result = await get_Data.get_Searchresults(name);
        setRes1(result);
        setName('');
    }

    return (
        <div className="header">
            <div>
                <h6 className='title'>Read-Only</h6>
                <a href='https://www.reddit.com/' target='_blank'><img src={logo} alt="Reddit Logo" /></a>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="input-group input-group-lg">
                    <input
                        type="text"
                        className="form-control"
                        value={name}
                        placeholder="Search mini-Reddit"
                        onChange={(e) => setName(e.target.value)}
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-lg"
                    />
                    <button type="submit" className="btn btn-outline-info">
                        Search
                    </button>
                </div>
            </form>
            <div className="btn-group">
                <button
                    type="button"
                    className="btn btn-danger dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    Topics
                </button>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Home</a></li>
                    <li><a className="dropdown-item" href="https://github.com/narsimha777" target='_blank'>Admin</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="https://www.reddit.com/" target='_blank'>Reddit</a></li>
                </ul>
            </div>
            {/* <h1>{searchResults.data.children.length}</h1> */}
        </div>
    );
}
