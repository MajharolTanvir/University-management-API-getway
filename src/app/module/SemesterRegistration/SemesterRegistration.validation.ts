
import { z } from 'zod';
import { SemesterRegistrationStatus } from '../../../enums/semesterRegistrationStatus';

const createSemesterRegistration = z.object({
  body: z.object({
    startDate: z.string({
      required_error: 'Start date is required'
    }),
    endDate: z.string({
      required_error: 'End date is required'
    }),
    minCredit: z.number({
      required_error: 'Minimum credit is required'
    }),
    maxCredit: z.number({
      required_error: 'Maximum credit is required'
    }),
    academicSemesterId: z.string({
      required_error: 'Academic semester id is required'
    })
  })
});

const updateSemesterRegistration = z.object({
  body: z.object({
    startDate: z.string().optional(),
    endDate: z.string().optional(),
    minCredit: z.number().optional(),
    maxCredit: z.number().optional(),
    academicSemesterId: z.string().optional(),
    status: z
      .enum([...Object.values(SemesterRegistrationStatus)] as [string, ...string[]], {})
      .optional()
  })
});

const createStudentSemesterRegistration = z.object({
  body: z.object({
    semesterRegistrationId: z.string({
      required_error: 'Semester registration id is required'
    }),
    studentId: z.string({
      required_error: 'Student id is required'
    })
  })
});

const updateStudentSemesterRegistration = z.object({
  body: z.object({
    semesterRegistrationId: z.string().optional(),
    studentId: z.string().optional()
  })
});

const enrollOrWithdrawCourse = z.object({
  body: z.object({
    offeredCourseId: z.string({
      required_error: 'Offered course id is required'
    }),
    offeredCourseSectionId: z.string({
      required_error: 'Offered course Section id is required'
    })
  })
});

export const SemesterRegistrationsValidation = {
  createSemesterRegistration,
  updateSemesterRegistration,
  createStudentSemesterRegistration,
  updateStudentSemesterRegistration,
  enrollOrWithdrawCourse
};
