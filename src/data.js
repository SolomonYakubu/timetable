const data = {
	venues: [
		{
			name: "Room 102",
			capacity: 100,
		},
		{
			name: "Room 103",
			capacity: 100,
		},
		{
			name: "Room 107",
			capacity: 150,
		},
		{
			name: "Room 108",
			capacity: 150,
		},
		{
			name: "Room 213",
			capacity: 170,
		},
		{
			name: "Room 305",
			capacity: 100,
		},
		{
			name: "NE LRM 110",
			capacity: 110,
		},
		{
			name: "NE LRM 114",
			capacity: 150,
		},
		{
			name: "NE LRM 113",
			capacity: 100,
		},
		{
			name: "NE LRM 115",
			capacity: 145,
		},
		{
			name: "NE LRM 116",
			capacity: 145,
		},
		{
			name: "NE LRM 117",
			capacity: 145,
		},
		{
			name: "CDB LRM 1",
			capacity: 90,
		},
		{
			name: "CDB LRM 2",
			capacity: 80,
		},
		{
			name: "CDB LRM 3",
			capacity: 50,
		},
		{
			name: "ELB LRM 1",
			capacity: 100,
		},
		{
			name: "TFB LRM 1",
			capacity: 145,
		},
		{
			name: "SICT LT",
			capacity: 590,
		},
		{
			name: "SEMT LT",
			capacity: 500,
		},
		{
			name: "LT 1",
			capacity: 420,
		},
		{
			name: "LT 2",
			capacity: 1000,
		},
		{
			name: "CAVERTON",
			capacity: 600,
		},
	],
	lecturers: [
		{
			lecturer: "lecturer 1",
			courses: [
				{
					course: "GST 110",
					population: 950,
				},
			],
		},
		{
			lecturer: "lecturer 2",
			courses: [
				{ course: "CHM 111", population: 950 },
				{ course: "CHM 211", population: 95 },
			],
		},
		{
			lecturer: "lecturer 3",
			courses: [{ course: "PHY 113", population: 950 }],
		},
		{
			lecturer: "lecturer 4",
			courses: [{ course: "GST 104", population: 950 }],
		},
		{
			lecturer: "lecturer 5",
			courses: [{ course: "CHM 191", population: 950 }],
		},
		{
			lecturer: "lecturer 6",
			courses: [{ course: "MAT 111", population: 950 }],
		},
		{
			lecturer: "lecturer 7",
			courses: [{ course: "CPT 111", population: 950 }],
		},
		{
			lecturer: "lecturer 8",
			courses: [{ course: "MAT 112", population: 950 }],
		},
		{
			lecturer: "lecturer 9",
			courses: [{ course: "STA 117", population: 950 }],
		},
		{
			lecturer: "lecturer 10",
			courses: [{ course: "PHY 100", population: 950 }],
		},
		{
			lecturer: "lecturer 11",
			courses: [
				{
					course: "ABE 211",
					population: 120,
				},
			],
		},
		{
			lecturer: "lecturer 12",
			courses: [{ course: "EEE 211", population: 800 }],
		},
		{
			lecturer: "lecturer 13",
			courses: [{ course: "EET 215", population: 800 }],
		},
		{
			lecturer: "lecturer 14",
			courses: [{ course: "EET 214", population: 800 }],
		},
		{
			lecturer: "lecturer 15",
			courses: [{ course: "EET 213", population: 800 }],
		},
		{
			lecturer: "lecturer 16",
			courses: [{ course: "EET 211", population: 800 }],
		},
		{
			lecturer: "lecturer 17",
			courses: [{ course: "EET 216", population: 800 }],
		},
		{
			lecturer: "lecturer 18",
			courses: [{ course: "EET 212", population: 800 }],
		},
		{
			lecturer: "lecturer 19",
			courses: [{ course: "EET 219", population: 800 }],
		},
		{
			lecturer: "lecturer 20",
			courses: [
				{ course: "MCE 312", population: 75 },
				{ course: "MCE 511", population: 75 },
			],
		},
		{
			lecturer: "lecturer 21",
			courses: [
				{
					course: "ABE 313",
					population: 95,
				},
			],
		},
		{
			lecturer: "lecturer 22",
			courses: [{ course: "EMG 311", population: 500 }],
		},
		{
			lecturer: "lecturer 23",
			courses: [{ course: "EEE 312", population: 400 }],
		},
		{
			lecturer: "lecturer 24",
			courses: [{ course: "EEE 313", population: 400 }],
		},
		{
			lecturer: "lecturer 25",
			courses: [{ course: "EEE 316", population: 400 }],
		},
		{
			lecturer: "lecturer 26",
			courses: [{ course: "EEE 314", population: 400 }],
		},
		{
			lecturer: "lecturer 27",
			courses: [{ course: "GST 311", population: 400 }],
		},
		{
			lecturer: "lecturer 28",
			courses: [
				{ course: "MCE 316", population: 75 },
				{ course: "MCE 411", population: 75 },
				{ course: "MCE 513", population: 75 },
			],
		},
		{
			lecturer: "lecturer 29",
			courses: [
				{ course: "MCE 315", population: 75 },
				{ course: "MCE 413", population: 75 },
				{ course: "MCE 514", population: 75 },
			],
		},
		{
			lecturer: "lecturer 30",
			courses: [
				{ course: "MCE 316", population: 75 },
				{ course: "MCE 415", population: 75 },
				{ course: "MCE 515", population: 75 },
			],
		},
		{
			lecturer: "lecturer 31",
			courses: [
				{ course: "MCE 317", population: 75 },
				{ course: "MCE 414", population: 75 },
				{ course: "MCE 516", population: 75 },
			],
		},
		{
			lecturer: "lecturer 32",
			courses: [{ course: "CPE 311", population: 400 }],
		},
		{
			lecturer: "lecturer 33",
			courses: [
				{ course: "CME 316", population: 150 },
				{ course: "CME 413", population: 70 },
			],
		},
		{
			lecturer: "lecturer 34",
			courses: [
				{ course: "EEE 413", population: 200 },
				{ course: "EEE 417", population: 100 },
			],
		},
		{
			lecturer: "lecturer 35",
			courses: [
				{ course: "EEE 412", population: 200 },
				{ course: "EEE 531", population: 100 },
			],
		},
		{
			lecturer: "lecturer 36",
			courses: [
				{ course: "EEE 431", population: 200 },
				{ course: "EEE 510", population: 100 },
			],
		},
		{
			lecturer: "lecturer 37",
			courses: [
				{ course: "EEE 419", population: 200 },
				{ course: "EEE 518", population: 100 },
			],
		},
		{
			lecturer: "lecturer 38",
			courses: [
				{ course: "EEE 418", population: 200 },
				{ course: "EEE 515", population: 100 },
			],
		},
		{
			lecturer: "lecturer 39",
			courses: [
				{ course: "EEE 411", population: 200 },
				{ course: "EEE 513", population: 100 },
			],
		},
		{
			lecturer: "lecturer 40",
			courses: [
				{ course: "EEE 416", population: 200 },
				{ course: "EEE 514", population: 100 },
			],
		},
		{
			lecturer: "lecturer 41",
			courses: [
				{ course: "EEE 417", population: 200 },
				{ course: "EEE 511", population: 100 },
			],
		},
		{
			lecturer: "lecturer 42",
			courses: [
				{ course: "EEE 516", population: 100 },
				{ course: "EEE 519", population: 100 },
			],
		},
		{
			lecturer: "lecturer 43",
			courses: [{ course: "CPT 413", population: 70 }],
		},
		{
			lecturer: "lecturer 44",
			courses: [{ course: "CPE 439", population: 70 }],
		},
		{
			lecturer: "lecturer 45",
			courses: [{ course: "CPE 414", population: 70 }],
		},
		{
			lecturer: "lecturer 46",
			courses: [{ course: "CPE 416", population: 70 }],
		},
		{
			lecturer: "lecturer 47",
			courses: [{ course: "CPE 417", population: 70 }],
		},
		{
			lecturer: "lecturer 48",
			courses: [{ course: "CPE 415", population: 70 }],
		},
		{
			lecturer: "lecturer 49",
			courses: [{ course: "CPE 438", population: 70 }],
		},
		{
			lecturer: "lecturer 50",
			courses: [{ course: "CPE 413", population: 70 }],
		},
		{
			lecturer: "lecturer 51",
			courses: [
				{ course: "CME 415", population: 75 },
				{ course: "CME 412", population: 75 },
			],
		},
		{
			lecturer: "lecturer 52",
			courses: [
				{ course: "CME 411", population: 75 },
				{ course: "CME 414", population: 75 },
			],
		},
		{
			lecturer: "lecturer 53",
			courses: [{ course: "CME 416", population: 75 }],
		},
		{
			lecturer: "lecturer 54",
			courses: [{ course: "MCE 517", population: 70 }],
		},
		{
			lecturer: "lecturer 55",
			courses: [{ course: "CPE MCE 518", population: 70 }],
		},
		{
			lecturer: "lecturer 56",
			courses: [{ course: "MCE 519", population: 70 }],
		},
	],
};
export default data;
