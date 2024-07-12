import { CheckInUseCase } from '../check-in'
import { PrismaChekInsRepository } from '@/repositories/prisma/prisma-check-ins-repository'
import { PrismaGymsRepository } from '@/repositories/prisma/prisma-gyms-repository'

export function makeCheckInUseCase() {
  const checkInsRepository = new PrismaChekInsRepository()
  const gymsRepository = new PrismaGymsRepository()

  const useCase = new CheckInUseCase(checkInsRepository, gymsRepository)

  return useCase
}
