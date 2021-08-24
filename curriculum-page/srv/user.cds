using {curso.curriculum.user as userPkg} from '../db/user';


@path : '/backend/userservice'
service UserService {
    entity user as projection on userPkg.Users;
    entity academicBackground as projection on userPkg.AcademicBackground;
    entity chart as projection on userPkg.Chart;

}

