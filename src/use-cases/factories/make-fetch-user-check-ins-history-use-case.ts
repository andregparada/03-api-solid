import { FecthUserCheckInsHistoryUseCase } from '../fetch-user-check-ins-history'
import { PrismaChekInsRepository } from '@/repositories/prisma/prisma-check-ins-repository'

export function makeFetchUserCheckInsHistoryUseCase() {
  const checkInsRepository = new PrismaChekInsRepository()
  const useCase = new FecthUserCheckInsHistoryUseCase(checkInsRepository)

  return useCase
}
