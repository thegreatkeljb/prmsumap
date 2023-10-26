const picBox = document.getElementById('picture'),
picInfo = document.getElementById('picInfo');

const locations = {
    //GEN
    'gen1': {
        backgroundImage: 'gen-admin.jpg',
        description: 'PRMSU Administrator Building'
    },
    'gen2': {
        backgroundImage: 'gen-registrar.jpg',
        description: 'Registrar Building'
    },
    'gen3': {
        backgroundImage: 'gen-qa.jpg',
        description: 'Student Service and Quality Assurance Building'
    },
    'gen4': {
        backgroundImage: 'gen-clinic.jpg',
        description: 'University Clinic'
    },
    'gen5': {
        backgroundImage: 'gen-gym.jpg',
        description: 'PRMSU Gymnasium'
    },
    'gen6': {
        backgroundImage: 'gen-lib.jpg',
        description: 'E-Library'
    },
    'gen7': {
        backgroundImage: 'gen-gad.jpg',
        description: 'Gender and Development Center'
    },
    'gen8': {
        backgroundImage: 'gen-dorm.jpg',
        description: 'PRMSU Dormitory'
    },
    'gen9': {
        backgroundImage: 'gen-rotc.jpg',
        description: 'ROTC Building'
    },
    //Grad
    'grad1': {
        backgroundImage: 'grad-new.jpg',
        description: 'Graduate School (New Building)'
    },
    'grad2': {
        backgroundImage: 'grad-old.jpg',
        description: 'Graduate School (Old Building)'
    },
    'grad3': {
        backgroundImage: 'grad-law.jpg',
        description: 'Law School Building'
    },
    //CCIT
    'ccit1': {
        backgroundImage: 'CCIT_New.jpg',
        description: 'Computing and Technology Build (CCIT New Building)'
    },
    'ccit2': {
        backgroundImage: 'CCIT_Old.jpg',
        description: 'Rosellyn E. Magsaysay Memorial Building (CCIT Old Building)'
    },
    //COE
    'coe1': {
        backgroundImage: 'COE_COE.jpg',
        description: 'College of Engineering Building'
    },
    'coe2': {
        backgroundImage: 'COE_SELB.jpg',
        description: 'Science and Engineering Laboratory Building (SELB)'
    },
    //CON
    'con1': {
        backgroundImage: 'CCIT_Old.jpg',
        description: 'CON - Rosellyn E. Magsaysay Memorial Building'
    },
    'con2': {
        backgroundImage: 'CON_Lab.jpg',
        description: 'Nursing Skills Laboratory Building'
    },
    //CIT
    'cit1': {
        backgroundImage: 'cit-automotive.jpg',
        description: 'Automotive Technology Building'
    },
    'cit2': {
        backgroundImage: 'cit-food.jpg',
        description: 'Food Technology / Food Service Management Building'
    },
    'cit3': {
        backgroundImage: 'cit-mechanical.jpg',
        description: 'Mechanical Technology Building'
    },
    'cit4': {
        backgroundImage: 'cit-dean.jpg',
        description: 'Deans Office Building'
    },
    'cit5': {
        backgroundImage: 'cit-electrical.jpg',
        description: 'Electrical Technology Building'
    },
    'cit6': {
        backgroundImage: 'cit-civil.jpg',
        description: 'Civil Technology Building'
    },
    'cit7': {
        backgroundImage: 'cit-drafting.jpg',
        description: 'Drafting Technology Building'
    },
    //CAS
    'cas1': {
        backgroundImage: 'cas-new.jpg',
        description: 'College of Arts and Sciences New Building'
    },
    'cas2': {
        backgroundImage: 'cas-old.jpg',
        description: 'College of Arts and Sciences Old Building'
    },
    //CTE
    'cte1': {
        backgroundImage: 'cte-bldg.jpg',
        description: 'College of Teaching Education Building'
    },
    'cte2': {
        backgroundImage: 'cte-science.jpg',
        description: 'College of Teaching Education Science-Based Education Building'
    },
    //CABA
    'caba1': {
        backgroundImage: 'caba-old.jpg',
        description: 'College of Accountancy and Business Administration Old Building'
    },
    'caba2': {
        backgroundImage: 'caba-new.jpg',
        description: 'College of Accountancy and Business Administration New Building'
    },
    //CTHM
    'cthm1': {
        backgroundImage: 'cthm-bldg.jpg',
        description: 'College of Tourism and Hospitality Management Building'
    },
    'cthm2': {
        backgroundImage: 'cthm-tourism.jpg',
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
        picBox.style.backgroundImage = "url(assets/locations/" + locationInfo.backgroundImage +")";
        picInfo.textContent = locationInfo.description;
        console.log("x" + locationInfo.backgroundImage)
    } else {
        // Handle the case where the location is not found
        console.log("Location not found");
    }
}
