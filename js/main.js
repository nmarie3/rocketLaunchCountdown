const url = 'https://fdo.rocketlaunch.live/json/launches/next/5'

fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        const rocketData = new Rocket (data.result)
        rocketData.assignToElements()
    })
    .catch(err => {
        console.log(`error ${err}`)
    });


    class Rocket {
        constructor(data) {
            data.forEach((rocketData) => {
                rocketData.win_open = new Date(rocketData.win_open);
            });
            this.data = data;
        }

        assignToElements() {
            this.data.forEach((rocketData, index) => {
                const properties = [
                    rocketData.name,
                    rocketData.win_open,
                    rocketData.mission_description,
                    rocketData.launch_description,
                    rocketData.provider.name,
                    rocketData.pad.location.name,
                    rocketData.weather_summary,
                ];
                document.getElementById(`rocket${index + 1}`).innerText = properties.join("\n");
                console.log(rocketData);
                console.log(properties[1])

            });
        }


    }

    // class rocketDate extends Rocket {
    //     constructor(data) {
    //         super(data)
    //         this.upcomingCount = upcomingCount
    //     }

    //     countDate() {
    //         for (const item of data) {
    //             this.upcomingCount.shift(item.win_open)
    //         }
    //         console.log(this.upcomingCount)
    //     }

    // }











    // OLD CODE

    // fetch(url)
    // .then(res => res.json())
    // .then(data => {
    //     console.log(data)
    //     const rocketData = new Rocket (data.result, data.result, data.result, data.result, data.result, data.result, data.result)
    //     rocketData.getRockets()
    //     rocketData.convertDate()
    //     rocketData.mixArr()
    // })
    // .catch(err => {
    //     console.log(`error ${err}`)
    // });


    // class Rocket {
    //     constructor(name, date, mission, description, provider, location, weather) {
    //         this.name = name
    //         this.date = date
    //         this.mission = mission
    //         this.description = description
    //         this.provider = provider
    //         this.location = location
    //         this.weather = weather
    //         this.rocketList = []
    //         this.dateList = []
    //         this.missionList = []
    //         this.descrpList = []
    //         this.providerList = []
    //         this.locationList = []
    //         this.weatherList = []
    //     }


    //     getRockets() {
    //         for (const property of this.name) {
    //         this.rocketList.push(property.name)
    //         this.dateList.push(property.win_open)
    //         this.missionList.push(property.mission_description)
    //         this.descrpList.push(property.launch_description)
    //         this.providerList.push(property.provider.name)
    //         this.locationList.push(property.pad.location.name)
    //         this.weatherList.push(property.weather_summary)
    //         }

    //         console.log(this.rocketList)
    //         console.log(this.dateList)
    //         console.log(this.missionList)
    //         console.log(this.descrpList)
    //         console.log(this.providerList)
    //         console.log(this.locationList)
    //         console.log(this.weatherList)
    //     }

    //     convertDate = () => {
    //         this.dateList.forEach((dateStr) => {
    //           const dateObj = new Date(dateStr);
    //           console.log(dateObj);
    //         });
    //       }

    //     mixArr() {
    //         const ARRAYS = [
    //             this.rocketList,
    //             this.dateList,
    //             this.missionList,
    //             this.descrpList,
    //             this.providerList,
    //             this.locationList,
    //             this.weatherList
    //         ];
    //         let rocket0 = ARRAYS.map(arr => arr[0])
    //         let rocket1 = ARRAYS.map(arr => arr[1])
    //         let rocket2 = ARRAYS.map(arr => arr[2])
    //         let rocket3 = ARRAYS.map(arr => arr[3])
    //         let rocket4 = ARRAYS.map(arr => arr[4])


    //         document.getElementById('rocket1').innerText = rocket0.join('\n')
    //         document.getElementById('rocket2').innerText = rocket1.join('\n')
    //         document.getElementById('rocket3').innerText = rocket2.join('\n')
    //         document.getElementById('rocket4').innerText = rocket3.join('\n')
    //         document.getElementById('rocket5').innerText = rocket4.join('\n')

    //         console.log(rocket0)
    //         console.log(rocket1)
    //         console.log(rocket2)
    //         console.log(rocket3)
    //         console.log(rocket4)
    //     }
       
    // }