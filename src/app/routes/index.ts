import express from 'express';
import { AcademicSemesterRouter } from '../module/academicSemester/academicSemester.router';
import { AcademicDepartmentRouter } from '../module/academicDepartment/academicDepartment.route';
import { AcademicFacultyRouter } from '../module/academicFaculty/academicFaculty.route';
import { BuildingRouter } from '../module/building/building.route';
import { RoomRouter } from '../module/room/room.route';
import { CoursesRouter } from '../module/course/course.route';
import { OfferedCoursesRouter } from '../module/offeredCourse/offeredCourse.route';
import { OfferedCourseClassSchedulesRouter } from '../module/offeredCourseClassSchedule/offeredCourseClassSchedule.route';
import { OfferedCoursesSectionsRouter } from '../module/OfferedCourseSection/OfferedCourseSection.route';
import { SemesterRegistrationsRouter } from '../module/SemesterRegistration/SemesterRegistration.route';
import { StudentEnrolledCoursesRouter } from '../module/StudentEnrolledCourse/StudentEnrolledCourse.route';
import { StudentEnrolledCourseMarkRouter } from '../module/StudentEnrolledCourseMarks/StudentEnrolledCourseMarks.route';
import { UserRouter } from '../module/user/user.route';
import { StudentRouter } from '../module/student/student.route';
import { FacultyRouter } from '../module/faculty/faculty.route';
import { AdminRouter } from '../module/admin/admin.route';
import { AuthRouter } from '../module/auth/auth.router';
import { managementDepartmentRouter } from '../module/managementDepartment/managementDepartment.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/auth',
    routes: AuthRouter
  },
  {
    path: '/users',
    routes: UserRouter
  },
  {
    path: '/students',
    routes: StudentRouter
  },
  {
    path: '/faculty',
    routes: FacultyRouter
  },
  {
    path: '/admin',
    routes: AdminRouter
  },
  {
    path: '/management-department',
    routes: managementDepartmentRouter
  },
  {
    path: '/academic-semesters',
    routes: AcademicSemesterRouter
  },
  {
    path: '/academic-departments',
    routes: AcademicDepartmentRouter
  },
  {
    path: '/academic-faculties',
    routes: AcademicFacultyRouter
  },
  {
    path: '/buildings',
    routes: BuildingRouter
  },
  {
    path: '/rooms',
    routes: RoomRouter
  },
  {
    path: '/courses',
    routes: CoursesRouter
  },
  {
    path: '/offered-courses',
    routes: OfferedCoursesRouter
  },
  {
    path: '/offered-course-class-schedule',
    routes: OfferedCourseClassSchedulesRouter
  },
  {
    path: '/offered-course-sections',
    routes: OfferedCoursesSectionsRouter
  },
  {
    path: '/semester-registration',
    routes: SemesterRegistrationsRouter
  },
  {
    path: '/student-enrolled-courses',
    routes: StudentEnrolledCoursesRouter
  },
  {
    path: '/student-enrolled-course-marks',
    routes: StudentEnrolledCourseMarkRouter
  },
  {
    path: '/student-semester-payments',
    routes: SemesterRegistrationsRouter
  }
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.routes);
});

export default router;
