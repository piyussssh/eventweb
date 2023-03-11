import { MdMoreVert } from "react-icons/md";
const Card = () => {
  return (
    <>
      <div className="c-card p-4 card border">
        <img
          className="card-img"
          src={require("../img/imgone.jpg")}
          alt="img"
        />
        <div className="card-content pt-3">
          <div className="d-flex justify-content-between">
            <h2 className="c-s-2 c-head">Event Heading One</h2>
            <span className="">
              <MdMoreVert className="c-s-2" />
            </span>
          </div>
          <p className="c-s-4 c-body">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <div className=" d-flex justify-content-between">
            <span className="c-s-3 ">21k Interested</span>
            <span className="c-s-3">2k Booked</span>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
