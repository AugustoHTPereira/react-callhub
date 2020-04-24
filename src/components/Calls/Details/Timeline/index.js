import React from "react";

// import { Container } from './styles';

const Timeline = ({ timeline }) => (
  <div>
    <ul className="TimeLine">
      {timeline.map((item) => (
        <li className="HistoricItem">
          <i className="TextGray">_ Augusto Henrique Tomba Pereira</i>
          <p>
            Donec a mattis mi, sit amet ornare lectus. Ut libero erat, lobortis
            a enim vel, semper molestie orci. Sed eu elit et purus varius
            ultrices in ut ante. Donec malesuada nunc est, a euismod sem
            sagittis ac.
          </p>
          <i className="TextGray Right">04/04/2020</i>

          {item.attachs && (
            <ul className="Attachs">
              {item.attachs.map((attach) => (
                <li>
                  <img
                    src="https://d13es1p1rl0iq1.cloudfront.net/wp-content/uploads/2019/09/plenonews_69429078_424547198412357_2917137491588994799_n-1024x684.jpg"
                    alt=""
                  />

                  <div className="Attach-Details">
                    <p>profile-picture-sdljflkflajs.png</p>
                    <span>277 kb</span>
                  </div>
                </li>
              ))}
              {/* <li>
              <div className="Attach-XLS">.xls</div>

              <div className="Attach-Details">
                <p>profile.png</p>
                <span>277 kb</span>
              </div>
            </li> */}
            </ul>
          )}
        </li>
      ))}
    </ul>
  </div>
);

export default Timeline;
