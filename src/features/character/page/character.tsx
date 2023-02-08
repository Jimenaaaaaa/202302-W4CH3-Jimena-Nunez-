import "./character.css";

import { MOCK } from "../mocks/character.mock";

// export type CharacterStructure = {
//   name: string;
//   family: string;
//   age: string;
//   alive: true;
//   reignYears?: number;
//   weapon?: string;
//   skill?: string;
//   boss?: string;
//   servingLevel?: number;
//   assesing?: string;
//   emoji: string;
// };

export function Character() {
  return (
    <ul className="character-list">
      {MOCK.map((item) => (
        <li className="character col">
          <div className="card character__card">
            <img
              src={item.image}
              alt="Nombre y familia del personaje"
              className="character__picture card-img-top"
            />
            <div className="card-body">
              <h2 className="character__name card-title h4">
                {item.name} {item.family} {item.emoji}
              </h2>
              <div className="character__info">
                <ul className="list-unstyled">
                  <li>Edad: {item.age}</li>
                  <li>
                    Estado:
                    <i className="fas fa-thumbs-down">
                      {" "}
                      {item.alive ? " vivo" : " muerto"}
                    </i>
                    <i className="fas fa-thumbs-up"></i>
                  </li>
                </ul>
              </div>
              <div className="character__overlay">
                <ul className="list-unstyled">
                  <li>
                    {item.reignYears
                      ? `Años de reinado: ${item.reignYears}`
                      : ""}
                  </li>
                  <li> {item.weapon ? `Arma: ${item.weapon}` : ""}</li>
                  <li> {item.skill ? `Destreza: ${item.skill}` : ""}</li>
                  <li>
                    {" "}
                    {item.servingLevel ? `Peloteo: ${item.servingLevel}` : ""}
                  </li>
                  <li>{item.assesing ? `Asesora a: ${item.assesing}` : ""}</li>
                  <li> {item.boss ? `Sirve a: ${item.boss}` : ""}</li>
                </ul>
                <div className="character__actions">
                  <button className="character__action btn">habla</button>
                  <button className="character__action btn">muere</button>
                </div>
              </div>
            </div>
            <i className="emoji"></i>
          </div>
        </li>
      ))}
    </ul>
  );
}
