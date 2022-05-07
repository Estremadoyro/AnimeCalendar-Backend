import { EndpointType } from "src/enums/endpointType";
import { EndpointStructure } from "./endpointStructure";

export interface EndpointFactoryMethods {
  getEndpoint(endpoint: EndpointType): EndpointStructure;
}
