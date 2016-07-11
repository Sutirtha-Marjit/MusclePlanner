var masterController = function ($scope) {
    $scope.appHeading = "Muscle Planner";
    $scope.currentUser = 'Sutirtha';
    $scope.appSchema = {
        user: [['Sutirtha', 'vxt@1234'], ['Susmita', 'vxt@1234']],
        workdoutdb: {
            "Cardiac": ["Aerobics Dance", "Aerobics Weight", "High Circuit Cardio", "Weight Circuit Cardio"],
            "Walk, Run & hopp": ["Breask walk", "Run", "Skipping", "Spot hopp"],
            "Chest": ["Pushup", "Flying", "Benchpress", "Angled Benchpress"],
            "Tricep": ["Low chair back", "Tricep press open", "Tricep press closed"],
            "Forearms": ["Single hand", "Double hand"],
            "Shoulder": ["Single hand front press", "Double hand front press", "Double hand Side press", "Single hand side press"],
            "Back": ["Lower", "Upper", "Stretch"],
            "Abs": ["Legrise", "Legrise Angled", "Legrise weight", "BiCycle", "Situps", "Crunches", "Angled Situps"],
            "Hamstring": ["Scut", "weight"],
            "GLute": ["Scut", "weight"],
            "Leg": ["Scut", "Scut-Weight"],
            "Love handles": ["Side-a-side", "Waist roll"],
            "Swiming": ["Normal", "Exhaustive"],
            "Stretching": ["Normal", "Exhaustive"],
            "Rest": []            
        },
        "level": ["High", "Medium", "Low"],
        "hrs": [0.0,0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5,5],
        "Skip":{"Reasons":["Fatigue","Illness","Wound","Work at home","Official work","Celebration"]} 
    };
}

muscleapp.controller('master', ['$scope', masterController]);
