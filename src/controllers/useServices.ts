import { services, Service } from "@/models/services";

export const useServices = (): Service[] => {
  return services;
};
