import { GetUserMetricsUseCase } from '../get-user-metrics'
import { PrismaChekInsRepository } from '@/repositories/prisma/prisma-check-ins-repository'

export function makeGetUserMetricsUseCase() {
  const checkInsRepository = new PrismaChekInsRepository()
  const useCase = new GetUserMetricsUseCase(checkInsRepository)

  return useCase
}
