import React from 'react';
import { Service } from '../../entities/Service.entity';
import Row from './Row';
import ServiceItem from './ServiceItem';

interface ServiceListProps {
  services: Service[];
}

const ServiceList: React.FC<ServiceListProps> = ({ services }) => {
  return (
    <Row>
      {services.map((service, index) => (
        <ServiceItem key={index} {...service} />
      ))}
    </Row>
  );
};

export default ServiceList;
