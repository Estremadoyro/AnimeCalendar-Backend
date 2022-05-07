import { EndpointType } from "src/types/endpointType";
import { EndpointStructure } from "./endpointStructure";

export interface EndpointFactoryMethods {
  getEndpoint(endpoint: EndpointType): EndpointStructure;
}
