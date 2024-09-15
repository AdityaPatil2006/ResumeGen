import React, { forwardRef } from "react";
import Resume from "./Resume";

const ResumePrint = forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <Resume
        aboutFormData={props.aboutFormData}
        educationFormData={props.educationFormData}
        workFormData={props.workFormData}
        skills={props.skills}
        projects={props.projects}
        profileImage={props.profileImage}
        themeColor={props.themeColor}
      />
    </div>
  );
});

// Exporting the component
export default ResumePrint;
