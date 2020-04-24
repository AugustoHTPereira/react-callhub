import React from "react";

// import { Container } from './styles';

const CallData = ({ call }) => (
  <>
    <div className="Details">
      {call.priority && <p>Prioridade: {call.priority}</p>}

      {call.category && <p>Categoria: Suporte</p>}

      <p>Criador: Augusto Henrique Tomba Pereira</p>

      <p>Data: {call.createdAt}</p>

      <div className="Situation Warning">
        <span className="Text">Concluído</span>
      </div>
    </div>

    <h1 className="CallTitle">{call.title}</h1>

    <p className="CallDescription">{call.description}</p>

    {call.attachs && (
      <ul className="Attachs">
        {call.attach.map((attach) => (
          <li className="Attach">
            <img
              src="https://d13es1p1rl0iq1.cloudfront.net/wp-content/uploads/2019/09/plenonews_69429078_424547198412357_2917137491588994799_n-1024x684.jpg"
              alt=""
            />

            <div className="Attach-Details">
              <p>profile.png</p>
              <span>277 kb</span>
            </div>
          </li>
        ))}

        {/* <li className="Attach">
                    <div className="Attach-PDF">.pdf</div>

                    <div className="Attach-Details">
                      <p>profile.png</p>
                      <span>277 kb</span>
                    </div>
                  </li>

                  <li className="Attach">
                    <div className="Attach-XLS">.xls</div>

                    <div className="Attach-Details">
                      <p>profile.png</p>
                      <span>277 kb</span>
                    </div>
                  </li>

                  <li className="Attach">
                    <div className="Attach-Default">.rar</div>

                    <div className="Attach-Details">
                      <p>profile.png</p>
                      <span>277 kb</span>
                    </div>
                  </li>*/}
      </ul>
    )}
  </>
);

export default CallData;
