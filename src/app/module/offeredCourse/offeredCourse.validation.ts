import { z } from 'zod';

const create = z.object({
  body: z.object({
    courseIds: z.array(
      z.string({
        required_error: 'Course id is required'
      }),
      {
        required_error: 'Course ids is required'
      }
    ),
    academicDepartmentId: z.string({
      required_error: 'Academic department id is required'
    }),
    semesterRegistrationId: z.string({
      required_error: 'Semester registration id is required'
    })
  })
});

const update = z.object({
  body: z.object({
    courseIds: z.array(z.string().optional()).optional(),
    academicDepartmentId: z.string().optional(),
    semesterRegistrationId: z.string().optional()
  })
});

export const OfferedCoursesValidation = {
  create,
  update
};
