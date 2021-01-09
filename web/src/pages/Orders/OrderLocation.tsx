import { useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import AsyncSelect from 'react-select/async';
import { fetchLocalMapBox } from '../../services/api';
import { Place } from '../../pages/Orders/index';
import { OrderLocationData } from './types';

const initialPosition = {
  lat: -22.199547,
  lng: -47.3804479
}


export interface Props {
  onChangeLocation: (location: OrderLocationData) => void
}

function OrderLocation({ onChangeLocation }: Props) {
  const [address, setAddress] = useState<Place>({
    position: initialPosition
  })

  const loadOptions = async (inputValue: string, callback: (places: Place[]) => void) => {
    const response = await fetchLocalMapBox(inputValue);

    const places = response.data.features.map((item: any) => {
      return ({
        label: item.place_name,
        value: item.place_name,
        position: {
          lat: item.center[1],
          lng: item.center[0]
        }
      });
    });

    callback(places);
  };

  const handleChangeSelect = (place: Place) => {
    setAddress(place);
    onChangeLocation({
      latitude: place.position.lat,
      longitude: place.position.lng,
      address: place.label!
    });
  };

  return (
    <div className="orders-location-container">
      <div className="orders-location-content">
        <h3>Selecione onde o pedido deve ser entregue:</h3>

        <div className="filter-container">
          <AsyncSelect
            placeholder="Digite um endereço pra entregar o pedido"
            className="filter"
            loadOptions={loadOptions}
            onChange={value => handleChangeSelect(value as Place)} />
        </div>

        <MapContainer
          center={address.position}
          zoom={15}
          key={address.position.lat}
          scrollWheelZoom={true}>
          <TileLayer
            url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_ACCESS_TOKEN_MAP_BOX}`}
          />
          <Marker position={address.position}>
            <Popup>
              {address.label}
            </Popup>
          </Marker>
        </MapContainer>

      </div>
    </div>
  );
}

export default OrderLocation;