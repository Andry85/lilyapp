import React from 'react';
import './MapContainer.css';



class MapContainer extends React.Component {
  render() {
    return (
      <section id="contacts" className="map">
        <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2605.3028986042855!2d28.51888321593619!3d49.23274617932591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472d5b218bdcae7b%3A0x8b512becf774c2fe!2z0YPQuy4g0JzQsNC60YHQuNC80LAg0KjQuNC80LrQviwgMTQsINCS0LjQvdC90LjRhtCwLCDQktC40L3QvdC40YbQutCw0Y8g0L7QsdC70LDRgdGC0YwsIDIxMDAw!5e0!3m2!1sru!2sua!4v1602258730698!5m2!1sru!2sua"></iframe>
        <div className="map__inner">
          <ul className="mapList">
            <li>
              <div className="mapList__title">
                  <span className="addres_icon"></span>
                  Address
              </div>
              <p>14, M.Shimka street, Vinnytsia, Vinnytsia region, 21050</p>
            </li>
            <li>
              <div className="mapList__title">
                  <span className="phone_icon"></span>
                  Phone
              </div>
              <p>+38068328541</p>
            </li>
            <li>
              <div className="mapList__title">
                  <span className="email_icon"></span>
                  E-mail
              </div>
              <p>lilyagency@gmail.com</p>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}

export default MapContainer;


