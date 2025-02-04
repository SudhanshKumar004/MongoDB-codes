import {Link , Outlet} from "react-router-dom"

const Layout = () =>
{
    return(
        <>
            <div className="nav" style={{display:"flex", gap:"20px"}}>
                <h1><Link to="home">Home</Link></h1>
                <h1><Link to="display">Display</Link></h1>
                <h1><Link to="insert">Insert</Link></h1>
            </div>

            <hr size="4" />
                <Outlet />
            <hr size="4" />

            <h4>www.Mycompany.com</h4>
        </>
    )
}

export default Layout