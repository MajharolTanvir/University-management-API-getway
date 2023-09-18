import express from 'express';
import { AcademicSemesterRouter } from '../module/academicSemester/academicSemester.router';
import { AcademicDepartmentRouter } from '../module/academicDepartment/academicDepartment.route';
import { AcademicFacultyRouter } from '../module/academicFaculty/academicFaculty.route';
import { BuildingRouter } from '../module/building/building.route';
import { RoomRouter } from '../module/room/room.route';

const router = express.Router();

const moduleRoutes = [
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
  }
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.routes);
});

export default router;
