// Global types for the application

export interface User {
  id: string
  name: string
  email: string
  avatar?: string
  createdAt: Date
  updatedAt: Date
}

export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

export interface PaginationParams {
  page: number
  limit: number
  total?: number
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
    hasNext: boolean
    hasPrev: boolean
  }
}

export interface BaseEntity {
  id: string
  createdAt: Date
  updatedAt: Date
}

export interface SEOData {
  title: string
  description: string
  keywords?: string[]
  ogImage?: string
  canonical?: string
}

export type Theme = 'light' | 'dark' | 'system'

export type Status = 'idle' | 'loading' | 'success' | 'error' 