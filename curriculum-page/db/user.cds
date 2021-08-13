namespace   curso.curriculum.user;
using { managed, cuid } from '@sap/cds/common';

entity Users : managed, cuid {
    name : String;
    lastName: String;
    dateOfBirth: Date;
    maritalStatus: String enum {
        Single   = 's';
        Married = 'm';
    };
    socialMedia : array of {
      link: String;
      name : String enum {
          facebook = 'f';
          linkedin = 'l';
          github = 'g';
          instagram = 'i'
      };
  };
  resume : String;
  skills : array of {
      nameSkill : String;
  };
  academicBackground : Association to many AcademicBackground
                                   on academicBackground.user = $self;
}

entity AcademicBackground: managed, cuid {
    user : Association to Users;
    nameCourse : String;
    levelCourse : String;
    dateOfStart : Date;
    dateOfEnd : Date;
}
