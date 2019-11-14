import Mock from 'mockjs';

Mock.mock('http://www.test.com/api/get/weather/week', {
	"resultcode": "200",
	"reason": "successed!",
	"result": {
		"sk": {
			"temp": "16",
			"wind_direction": "西北风",
			"wind_strength": "4级",
			"humidity": "27%",
			"time": "14:51"
		},
		"today": {
			"temperature": "5℃~17℃",
			"weather": "多云转晴",
			"weather_id": {
				"fa": "01",
				"fb": "00"
			},
			"wind": "西北风4-5级",
			"week": "星期日",
			"city": "北京",
			"date_y": "2019年11月10日",
			"dressing_index": "较冷",
			"dressing_advice": "建议着厚外套加毛衣等服装。年老体弱者宜着大衣、呢外套加羊毛衫。",
			"uv_index": "弱",
			"comfort_index": "",
			"wash_index": "不宜",
			"travel_index": "较不宜",
			"exercise_index": "较不宜",
			"drying_index": ""
		},
		"future": [{
			"temperature": "5℃~17℃",
			"weather": "多云转晴",
			"weather_id": {
				"fa": "01",
				"fb": "00"
			},
			"wind": "西北风4-5级",
			"week": "星期日",
			"date": "20191110"
		}, {
			"temperature": "4℃~16℃",
			"weather": "晴转多云",
			"weather_id": {
				"fa": "00",
				"fb": "01"
			},
			"wind": "北风微风",
			"week": "星期一",
			"date": "20191111"
		}, {
			"temperature": "6℃~16℃",
			"weather": "多云",
			"weather_id": {
				"fa": "01",
				"fb": "01"
			},
			"wind": "北风微风",
			"week": "星期二",
			"date": "20191112"
		}, {
			"temperature": "-4℃~8℃",
			"weather": "晴",
			"weather_id": {
				"fa": "00",
				"fb": "00"
			},
			"wind": "西北风4-5级",
			"week": "星期三",
			"date": "20191113"
		}, {
			"temperature": "-3℃~7℃",
			"weather": "晴",
			"weather_id": {
				"fa": "00",
				"fb": "00"
			},
			"wind": "南风微风",
			"week": "星期四",
			"date": "20191114"
		}, {
			"temperature": "4℃~16℃",
			"weather": "晴转多云",
			"weather_id": {
				"fa": "00",
				"fb": "01"
			},
			"wind": "北风微风",
			"week": "星期五",
			"date": "20191115"
		}, {
			"temperature": "-4℃~8℃",
			"weather": "晴",
			"weather_id": {
				"fa": "00",
				"fb": "00"
			},
			"wind": "西北风4-5级",
			"week": "星期六",
			"date": "20191116"
		}]
	},
	"error_code": 0
})