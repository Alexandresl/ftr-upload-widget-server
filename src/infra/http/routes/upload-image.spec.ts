import { randomUUID } from 'node:crypto'
import { Readable } from 'node:stream'
import { eq } from 'drizzle-orm'
import { describe, expect, it, vi } from 'vitest'
import { InvalidFileFormat } from '@/app/functions/errors/invalid-file-format'
import { uploadImage } from '@/app/functions/upload-image'
import { db } from '@/infra/db'
import { schema } from '@/infra/db/schemas'
import { isLeft, isRight, unwrapEither } from '@/shared/either'

vi.mock('@/infra/storage/upload-file-to-storage', () => {
    return {
        uploadFileToStorage: vi.fn().mockImplementation(() => {
            return {
                key: `${randomUUID()}.jpg`,
                url: `https://example.com/${randomUUID()}.jpg`,
            }
        }),
    }
})

describe('upload image', () => {
    it('should be able to upload an image', async () => {

        const fileName = `${randomUUID()}.jpg`

        // system under test

        const sut = await uploadImage({
            fileName,
            contentType: 'image/jpg',
            contentStream: Readable.from([]), // Simulando um stream de arquivo vazio
        })

        expect(isRight(sut)).toBe(true)

        const result = await db
            .select()
            .from(schema.uploads)
            .where(eq(schema.uploads.name, fileName))

        expect(result).toHaveLength(1)
    })

    it('should not be able to upload an invalid file', async () => {

        const fileName = `${randomUUID()}.jpg`

        // system under test

        const sut = await uploadImage({
            fileName,
            contentType: 'document/pdf',
            contentStream: Readable.from([]), // Simulando um stream de arquivo vazio
        })

        expect(isLeft(sut)).toBe(true)

        expect(unwrapEither(sut)).toBeInstanceOf(InvalidFileFormat)
    })

})