var APP_DATA = {
  "scenes": [
    {
      "id": "0-1a-halaman-depan",
      "name": "1A. HALAMAN DEPAN",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -3.0732462890181367,
        "pitch": -0.15169775424425325,
        "fov": 1.3826135306839293
      },
      "linkHotspots": [
        {
          "yaw": 2.845876278771481,
          "pitch": 0.10694956796259625,
          "rotation": 0,
          "target": "1-1b-ruang-utama"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-1b-ruang-utama",
      "name": "1B. RUANG UTAMA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -2.2837603633743733,
        "pitch": 0.19552069185287024,
        "fov": 1.3826135306839293
      },
      "linkHotspots": [
        {
          "yaw": 1.4580113080140453,
          "pitch": 0.17670863948828064,
          "rotation": 0,
          "target": "0-1a-halaman-depan"
        },
        {
          "yaw": -3.044198219999611,
          "pitch": 0.2329637653575869,
          "rotation": 4.71238898038469,
          "target": "2-1c-ruang-dalam"
        },
        {
          "yaw": -2.424160613011331,
          "pitch": 0.1699606416616355,
          "rotation": 0,
          "target": "3-1d-halaman-belakang"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-1c-ruang-dalam",
      "name": "1C. RUANG DALAM",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -2.852643699648514,
        "pitch": 0.16880746595560225,
        "fov": 1.3826135306839293
      },
      "linkHotspots": [
        {
          "yaw": 0.32199176317771183,
          "pitch": 0.2556253062653955,
          "rotation": 0,
          "target": "1-1b-ruang-utama"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-1d-halaman-belakang",
      "name": "1D. HALAMAN BELAKANG",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -2.8425477775168844,
        "pitch": 0.09176357704715699,
        "fov": 1.3826135306839293
      },
      "linkHotspots": [
        {
          "yaw": 0.3293100837260212,
          "pitch": 0.06738486448872294,
          "rotation": 0,
          "target": "1-1b-ruang-utama"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-2a-taman-kolam-1",
      "name": "2A. TAMAN KOLAM 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -2.409642313786385,
        "pitch": 0.2675616257148583,
        "fov": 1.3826135306839293
      },
      "linkHotspots": [
        {
          "yaw": 0.9650081239483494,
          "pitch": 0.04245680687035858,
          "rotation": 0,
          "target": "5-2a-taman-kolam-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-2a-taman-kolam-2",
      "name": "2A. TAMAN KOLAM 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 2.0134801592500073,
        "pitch": 0.18416907515290326,
        "fov": 1.3826135306839293
      },
      "linkHotspots": [
        {
          "yaw": -1.5501299505687562,
          "pitch": 0.15231440377281835,
          "rotation": 0,
          "target": "4-2a-taman-kolam-1"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "GOLDEN BERRY",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
