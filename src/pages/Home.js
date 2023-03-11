import Navbarc from "../components/Navbar";
import Card from "../components/card"

const Home = () => {
    return(
        <>
        <Navbarc/>
        <div className="container mt-4 flex-wrap d-flex gap-5 justify-content-center justify-content-lg-start">
           
            
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            

        </div>
        </>

    );
};
export default Home;