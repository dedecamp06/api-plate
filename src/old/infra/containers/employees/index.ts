import 'reflect-metadata';
import { container } from 'tsyringe';

import EmployeesRepositoryInterface from 'old/domain/employees/repositories/EmployeesRepositoryInterface';
import ConcreteEmployeesRepository from 'old/infra/repositories/concrete-employees/ConcreteEmployeesRepository';

container.registerSingleton<EmployeesRepositoryInterface>(
  'EmployeesRepository',
  ConcreteEmployeesRepository,
);

