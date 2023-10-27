const picBox = document.getElementById('picture'),
picInfo = document.getElementById('picInfo');

const locations = {
    //GEN
    'gen1': {
        backgroundImage: 'gen-admin.JPG',
        description: 'PRMSU Administrator Building'
    },
    'gen2': {
        backgroundImage: 'gen-registrar.JPG',
        description: 'Registrar Building'
    },
    'gen3': {
        backgroundImage: 'gen-qa.JPG',
        description: 'Student Service and Quality Assurance Building'
    },
    'gen4': {
        backgroundImage: 'gen-clinic.JPG',
        description: 'University Clinic'
    },
    'gen5': {
        backgroundImage: 'gen-gym.JPG',
        description: 'PRMSU Gymnasium'
    },
    'gen6': {
        backgroundImage: 'gen-lib.JPG',
        description: 'E-Library'
    },
    'gen7': {
        backgroundImage: 'gen-gad.JPG',
        description: 'Gender and Development Center'
    },
    'gen8': {
        backgroundImage: 'gen-dorm.JPG',
        description: 'PRMSU Dormitory'
    },
    'gen9': {
        backgroundImage: 'gen-rotc.JPG',
        description: 'ROTC Building'
    },
    //Grad
    'grad1': {
        backgroundImage: 'grad-new.JPG',
        description: 'Graduate School (New Building)'
    },
    'grad2': {
        backgroundImage: 'grad-old.JPG',
        description: 'Graduate School (Old Building)'
    },
    'grad3': {
        backgroundImage: 'grad-law.JPG',
        description: 'Law School Building'
    },
    //CCIT
    'ccit1': {
        backgroundImage: 'CCIT_New.JPG',
        description: 'Computing and Technology Build (CCIT New Building)'
    },
    'ccit2': {
        backgroundImage: 'CCIT_Old.JPG',
        description: 'Rosellyn E. Magsaysay Memorial Building (CCIT Old Building)'
    },
    //COE
    'coe1': {
        backgroundImage: 'COE_COE.JPG',
        description: 'College of Engineering Building'
    },
    'coe2': {
        backgroundImage: 'COE_SELB.JPG',
        description: 'Science and Engineering Laboratory Building (SELB)'
    },
    //CON
    'con1': {
        backgroundImage: 'CCIT_Old.JPG',
        description: 'CON - Rosellyn E. Magsaysay Memorial Building'
    },
    'con2': {
        backgroundImage: 'CON_Lab.JPG',
        description: 'Nursing Skills Laboratory Building'
    },
    //CIT
    'cit1': {
        backgroundImage: 'cit-automotive.JPG',
        description: 'Automotive Technology Building'
    },
    'cit2': {
        backgroundImage: 'cit-food.JPG',
        description: 'Food Technology / Food Service Management Building'
    },
    'cit3': {
        backgroundImage: 'cit-mechanical.JPG',
        description: 'Mechanical Technology Building'
    },
    'cit4': {
        backgroundImage: 'cit-dean.JPG',
        description: 'Deans Office Building'
    },
    'cit5': {
        backgroundImage: 'cit-electrical.JPG',
        description: 'Electrical Technology Building'
    },
    'cit6': {
        backgroundImage: 'cit-civil.JPG',
        description: 'Civil Technology Building'
    },
    'cit7': {
        backgroundImage: 'cit-drafting.JPG',
        description: 'Drafting Technology Building'
    },
    //CAS
    'cas1': {
        backgroundImage: 'cas-new.JPG',
        description: 'College of Arts and Sciences New Building'
    },
    'cas2': {
        backgroundImage: 'cas-old.JPG',
        description: 'College of Arts and Sciences Old Building'
    },
    //CTE
    'cte1': {
        backgroundImage: 'cte-bldg.JPG',
        description: 'College of Teaching Education Building'
    },
    'cte2': {
        backgroundImage: 'cte-science.JPG',
        description: 'College of Teaching Education Science-Based Education Building'
    },
    //CABA
    'caba1': {
        backgroundImage: 'caba-old.JPG',
        description: 'College of Accountancy and Business Administration Old Building'
    },
    'caba2': {
        backgroundImage: 'caba-new.JPG',
        description: 'College of Accountancy and Business Administration New Building'
    },
    //CTHM
    'cthm1': {
        backgroundImage: 'cthm-bldg.JPG',
        description: 'College of Tourism and Hospitality Management Building'
    },
    'cthm2': {
        backgroundImage: 'cthm-tourism.JPG',
        description: 'Tourism and Hospitality Management Building'
    },
    'default': {
        backgroundImage: 'default.png',
        description: ''
    }
};

function changeBackground(loc) {
    // Check if the location exists in the hashmap
    if (locations[loc]) {
        const locationInfo = locations[loc];
        picBox.src = "assets/locations/" + locationInfo.backgroundImage;
        picInfo.textContent = locationInfo.description;
    } else {
        // Handle the case where the location is not found
        console.log("Location not found");
    }
}
