import { motion } from 'framer-motion'

const Logo = () => {
    const icon = {
        hidden: {
          pathLength: 0,
          fill: "rgba(255, 255, 255, 0)"
        },
        visible: {
          pathLength: 1,
          fill: "rgba(255, 255, 255, 1)"
        }
      }
    return (
        <div className="flex"><svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            strokeLinecap="square"
            strokeMiterlimit="10"
            viewBox="0 0 146.808 146.808"
            className="w-[30px] animate-pulse duration-500"
        >
            <clipPath id="p.0">
                <path d="M0 0h146.808v146.808H0V0z"></path>
            </clipPath>
            <g clipPath="url(#p.0)">
                <path
                    fill="#000"
                    fillOpacity="0"
                    fillRule="evenodd"
                    d="M0 0h146.808v146.808H0z"
                ></path>
                <defs>
                    <linearGradient
                        id="p.1"
                        x1="0.142"
                        x2="0.142"
                        y1="0.142"
                        y2="12.117"
                        gradientTransform="scale(11.97506)"
                        gradientUnits="userSpaceOnUse"
                        spreadMethod="pad"
                    >
                        <stop offset="0" stopColor="#274e13"></stop>
                        <stop offset="1" stopColor="#0f0"></stop>
                    </linearGradient>
                </defs>
                <path
                    fill="url(#p.1)"
                    fillRule="evenodd"
                    d="M1.703 73.404c0-39.599 32.102-71.7 71.701-71.7a71.7 71.7 0 0171.701 71.7c0 39.6-32.102 71.701-71.7 71.701-39.6 0-71.702-32.102-71.702-71.7z"
                ></path>
                <path
                    stroke="#000"
                    strokeLinecap="butt"
                    strokeLinejoin="round"
                    strokeWidth="1"
                    d="M1.703 73.404h0c0-39.599 32.102-71.7 71.701-71.7h0a71.7 71.7 0 0171.701 71.7h0c0 39.6-32.102 71.701-71.7 71.701h0c-39.6 0-71.702-32.102-71.702-71.7z"
                ></path>
                <defs>
                    <linearGradient
                        id="p.2"
                        x1="4.441"
                        x2="4.441"
                        y1="1.573"
                        y2="6.655"
                        gradientTransform="scale(5.08238)"
                        gradientUnits="userSpaceOnUse"
                        spreadMethod="pad"
                    >
                        <stop offset="0" stopColor="#fff"></stop>
                        <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
                    </linearGradient>
                </defs>
                <path
                    fill="url(#p.2)"
                    fillRule="evenodd"
                    d="M22.57 33.821c.017-14.266 22.773-25.827 50.838-25.826 28.064 0 50.817 11.563 50.83 25.83z"
                ></path>
            </g>
        </svg>
        <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="250"
      height="80"
      version="1"
      viewBox="0 0 452 150"
      className="w-full xl:w-[250px]"
      variants={icon}
      initial="hidden"
      animate="visible"
    >
      <g fill="#fff">
        <motion.path
          d="M3526 1412c-7-12 20-42 39-42 9 0 15-23 20-77 7-81 22-192 31-230 5-18 1-22-23-25s-28-8-31-38l-3-36h68c37 0 83-3 102-8 31-8 34-8 26 10-4 10-10 39-12 64-4 36 0 52 19 80 13 19 32 36 42 38 17 4 18-2 13-80-3-45-7-91-9-102-3-16 9-21 75-37 44-11 83-16 88-13 17 10 9 36-12 41-21 6-22 9-15 125 7 129-1 184-34 213-38 34-109-9-160-98l-29-50 6 44c2 24 14 81 25 127s18 85 16 87c-10 10-236 17-242 7zm232-16c1-2-4-21-12-44-14-39-36-170-36-213 0-30 15-22 28 14 15 42 75 113 112 132 65 33 83-13 78-197-2-81 1-133 7-135 20-7 39-22 35-27-3-2-39 4-80 13-55 13-74 21-71 32 46 166-13 258-81 126-19-38-19-54-2-114 6-22 5-22-25-12-17 6-53 9-81 7-49-3-50-3-50 26 0 27 2 28 31 22 27-5 30-3 24 11-11 31-35 206-35 263 0 62-6 74-37 84-13 4-23 12-23 18 0 7 34 8 108 3 59-4 108-8 110-9zM232 1391c-29-10-54-20-55-22-2-2-17-22-35-45-60-78-69-269-16-346 22-31 35-39 80-49s64-9 121 5c37 9 83 25 103 35 31 16 36 23 41 70 4 28 13 65 19 82 9 20 9 34 3 40-5 5-57 8-119 7-88-2-109-6-109-18 0-8 12-21 27-28 31-14 41-42 36-93-4-48-40-53-63-8-24 46-45 185-35 237 14 79 82 122 158 99l37-11-40-6c-49-7-64-16-75-44-11-29 5-55 45-72 42-17 137-18 153-2 9 9 12 7 12-10 0-18 6-22 30-22 34 0 34 0 23-113-5-61-9-69-34-82-20-11-26-20-22-35 8-29 16-31 73-19 29 6 93 14 144 18 89 6 91 7 94 32 3 24 0 27-46 33-49 6-50 7-61 51-17 69-14 103 14 130 16 17 35 25 60 25 19 0 35-2 35-4s-15-13-34-24c-42-25-62-74-40-97 20-20 103-20 151 0 19 8 36 15 38 15 1 0 7-17 13-38 16-52 75-118 119-133 45-15 132-14 178 1 64 21 95 88 57 123-45 41-174 38-187-4-8-24 18-67 48-79 16-6 17-9 5-9-48-2-78 41-78 112v44l88-14c48-8 106-16 129-16 31-2 43-6 43-18 0-32 59-108 101-130 51-26 161-29 206-6 93 48 85 124-15 146-78 16-122-2-122-50 0-22 8-34 33-49 28-18 29-20 10-20-46 0-80 65-71 132l3 25 100-17c55-10 111-19 125-21 23-4 25-1 28 39 4 56-25 103-78 127-61 27-207 16-262-20-21-14-41-34-44-43-14-44-18-47-22-22-5 34-48 77-90 91-59 19-198 4-245-27-21-14-41-34-46-46-7-19-9-18-29 15-11 20-35 43-53 52-37 20-136 23-168 6-18-10-21-9-21 9 0 24 2 24-51 0-54-24-119-27-119-5 0 31-31 75-69 99-54 35-157 42-229 17zm218-21c38-19 70-65 70-99 0-19 6-21 53-21 28 1 63 7 77 15 34 20 42 18 35-5-8-24-7-24 38-5 80 33 173 11 213-50 37-57-15-103-119-104-34-1-49 3-54 15-10 25 14 63 52 81 41 20 44 30 11 43-33 12-91-5-111-33-29-41-12-167 25-187 10-5 33-10 50-10 25 0 31-4 28-17-3-15-19-19-103-24-55-4-117-11-138-17-32-9-39-8-44 6-4 8-2 17 4 19 39 13 45 29 47 124l1 94-27 3c-20 2-28 9-28 24 0 16-4 18-17 12-10-5-48-9-84-9-72 0-109 19-109 56 0 25 38 49 77 49 65 0 27 41-39 43-63 2-99-20-127-77-24-47-24-52-13-131 22-151 55-210 102-185 27 14 34 49 20 99-8 30-17 42-35 47-14 3-25 13-25 21 0 12 8 14 38 9 20-3 68-6 105-6 65 0 67-1 57-20-6-11-14-46-18-77-7-53-10-59-42-75-19-9-65-24-102-32-169-40-244 54-209 260 24 137 107 201 246 187 33-3 76-13 95-23zm841-125c16-9 34-27 39-41 12-30 13-94 3-94-5 0-59 9-122 20s-117 17-120 15c-10-11-1-106 14-134 16-33 45-45 91-39l29 4-37 18c-46 24-64 59-41 82 25 24 126 15 156-14 20-21 21-24 7-50-22-39-75-62-143-62-72 0-113 17-154 63-66 75-63 177 6 218 65 40 207 47 272 14zm358 14c33-7 58-19 70-35 19-24 38-100 28-111-3-3-59 4-124 16s-122 21-127 21c-4 0-6-29-4-65 5-81 31-115 90-115 46 0 48 10 6 30-99 47-29 114 84 81 44-14 56-42 33-77-46-70-201-73-279-5-28 25-56 86-56 125 0 54 16 83 58 110 35 22 57 27 149 34 12 1 45-3 72-9z"
          transform="matrix(.1 0 0 -.1 0 150)"
          variants={icon}
          initial="hidden"
          animate="visible"
          transition={{
            default: { duration: 2, ease: "easeInOut" },
            fill: { duration: 2, ease: [1, 0, 0.8, 1] }
          }}
        ></motion.path>
        <motion.path
          d="M1103 1229c-37-11-43-33-13-49 34-18 128-16 148 3 15 16 15 18 0 33-19 20-91 27-135 13zm125-14c3-2 2-11-1-20-8-20-105-21-133-1-20 15-18 18 31 30 21 5 96-2 103-9zM1513 1233c-28-6-44-25-34-42 11-17 101-32 138-22 17 4 29 15 31 27 5 35-58 52-135 37zm120-22c18-18-4-31-51-31-60 0-94 9-89 24 8 24 117 30 140 7zM2392 1389c2-15 12-25 28-29 25-6 25-7 31-140 4-74 12-148 18-163 14-37 16-34-20-42-29-7-31-9-24-43 4-21 8-39 11-41 2-2 18 2 35 9 28 12 156 15 284 7 27-2 33 4 58 52 33 67 37 146 8 182-34 43-140 18-185-44l-21-29 34-30c30-27 39-29 74-24 23 4 47 12 54 18s13 7 13 2c-1-47-124-74-169-36-45 35-44 145 2 281l23 69-46 6c-25 3-83 9-128 12l-84 7 4-24zm143 1c49-6 90-12 92-14 2-1-4-23-12-47-62-172-49-297 33-318 67-18 152 16 152 61 0 21-4 22-31 7-11-5-38-11-60-11-67-1-91 39-46 78 48 43 123 58 147 29 20-25 24-90 6-141-26-77-35-82-114-71-82 11-227 4-247-13-12-10-15-10-15 3 0 8-3 22-6 31-5 13 1 16 25 16 36 0 35-5 16 85-8 39-15 113-15 166 0 98-7 119-42 119-10 0-18 7-18 15 0 18 15 18 135 5zM2933 1398c-43-21-22-80 33-94 39-10 120 1 149 20 21 14 24 20 15 36-6 11-24 27-40 35-33 17-124 19-157 3zm158-14c60-30 14-74-78-74-40 0-58 5-73 20-24 24-25 34-4 54 20 21 115 21 155 0zM4165 1383c-27-2-64-5-82-8-30-5-31-7-26-41l6-36-44 4-44 3-3-42c-3-47-4-46 51-34 34 8 38 7 32-7-4-10-13-47-22-84-13-58-13-74-2-110 20-63 60-81 163-73 94 7 151 30 189 74 46 55 31 93-45 116-52 15-111 12-135-8-23-17-15-64 13-86 15-12 33-21 40-21 27 0 14-18-17-25-45-10-62 11-62 77 0 29 3 74 7 101l7 47h44c39 0 46-3 60-31 13-24 20-29 38-23 37 11 41 21 29 62-7 22-12 58-12 80 0 50-10 58-50 37-25-13-29-20-24-40 6-23 3-25-30-25h-36l25 40c27 42 26 61-3 58-9-1-39-3-67-5zm60-46c-14-24-25-47-25-50 0-4 21-7 46-7 46 0 46 0 41 29-5 26-2 31 22 39l29 10 5-56c3-32 9-69 12-83 6-21 3-27-14-32-15-4-27 3-42 24-18 25-27 29-69 29-54 0-54 1-65-105-4-36-2-77 4-103 10-37 15-42 41-42 36 0 80 16 80 30 0 6-12 15-27 21-60 23-82 68-44 89 52 27 173-3 179-46 4-28-33-71-76-90-54-22-160-35-207-24-57 13-75 40-75 111 0 32 7 79 15 104 16 47 14 67-8 60-7-2-24-6-39-9-26-6-28-4-28 29 0 32 2 34 28 29 65-13 67-12 64 28-4 40-6 39 118 51 19 2 41 5 48 5 8 1 4-14-13-41zM2031 1274c-18-15-46-45-62-67-32-44-37-36-14 19 14 33 13 35-8 43-12 5-63 10-112 12-80 4-90 2-93-14-2-12 6-21 26-28 28-9 30-14 36-79 4-38 11-83 16-100 7-26 6-31-5-26-29 11-45-5-45-44 0-38 0-39 31-30 29 9 117-1 140-15 21-13 26 7 13 51-12 39-11 50 3 85 14 36 38 59 61 59 17 0 22-43 12-105-5-33-11-69-12-79-3-17 8-22 79-36 46-10 85-15 88-12 12 13 3 40-15 45-19 5-20 12-18 146 3 128 1 142-18 168-28 37-61 40-103 7zm83 3c26-19 34-81 28-213-5-111-4-115 17-121 39-10 22-24-22-18-87 13-112 21-109 36 13 54 21 128 16 151-9 45-28 52-62 23-41-34-56-83-43-131 6-21 9-39 7-41s-24 1-50 8c-26 6-62 9-81 6-32-5-35-4-35 20 0 23 3 25 31 21 27-4 30-2 25 16-3 12-11 59-17 106-13 92-21 110-50 110-11 0-19 6-19 13 0 10 20 11 97 4 54-4 99-9 100-11 2-2 0-14-5-27s-12-44-15-69c-5-38-4-42 6-26 7 10 23 36 37 56 26 41 95 100 114 100 7 0 20-6 30-13zM2995 1265c-27-7-67-14-87-14-20-1-40-5-43-11-10-16 13-48 37-52 50-7 25-167-27-177-23-4-35-18-35-43 0-14 14-16 140-11l140 6v-25c0-14 9-37 21-52 34-43 84-59 179-60 106 0 170 25 196 76 31 59 30 184-1 261-5 13-2 17 14 17 12 0 21 6 21 13 0 6 3 22 6 35 6 20 3 22-32 22-22 1-57 7-79 15-52 19-58 19-50-4 6-19 4-19-22-6-37 18-109 25-146 14-38-11-56-36-57-79 0-98 56-170 135-170 24 0 56 5 71 10 15 6 29 8 32 6 11-12-11-99-32-123-19-22-33-27-82-30l-59-3 45 17c27 11 50 29 60 46 14 27 14 29-9 48-29 24-135 27-168 4-19-14-21-13-27 16-4 21-11 30-23 28-46-4-46-4-40 94 4 50 10 104 13 120 6 24 3 27-17 26-13-1-46-7-74-14zm74-37c-4-24-8-75-9-114 0-74 14-102 44-91 10 4 17-3 21-24 4-16 8-29 10-29 1 0 19 7 38 15 38 16 95 19 135 9 18-5 22-13 20-33s-14-31-50-49c-73-34-63-47 32-42 68 3 101 44 113 143 7 52 5 54-46 32-105-44-187 15-191 137-1 39 3 53 18 64 25 18 109 17 161-1 22-8 41-15 43-15 1 0 2 9 2 19 0 18 2 19 28 5 15-7 44-14 65-14 33 0 37-3 37-26s-3-26-26-21c-23 4-25 2-19-17 31-97 38-135 31-188-14-110-62-146-196-147-125-1-187 29-194 95-3 27-8 30-57 38-34 5-85 5-138-2-47-7-86-10-88-8-9 9 11 36 27 36 28 0 48 32 60 97 12 71 4 100-32 105-13 2-24 10-26 19-2 13 10 17 67 23 38 3 80 10 93 15 35 15 36 14 27-31z"
          transform="matrix(.1 0 0 -.1 0 150)"
          
        ></motion.path>
        <motion.path
          d="M3258 1169c-26-15-22-27 15-49 58-36 187-21 163 18-21 34-139 54-178 31zm128-14c42-17 40-39-4-43-33-3-97 11-122 28-13 9-13 11 0 20 22 14 86 12 126-5zM1630 656c1-42 13-56 51-56 44 0 69-27 69-73 0-58-87-99-175-83-72 14-84 59-30 113 19 19 33 38 30 42-2 4-42 21-89 36-71 25-87 27-100 16-28-24-20-49 19-57 19-3 35-8 35-9 0-2-16-19-35-38-42-42-47-89-13-132 25-31 90-64 129-65 26 0 39-16 39-45 0-25-31-45-71-45-44 0-46-5-21-38 18-24 19-24 114-11 74 9 109 10 154 1 50-11 60-10 76 5 25 23 23 43-6 43-31 0-73 37-81 71-6 24-3 27 32 34 71 13 113 52 113 106 0 25-26 77-53 107-20 22-20 22-1 22 49 0 58 47 12 54-74 11-198 13-198 2zm-137-34l77-28-30-23c-57-41-58-102-4-131 31-17 154-7 189 16 40 26 49 85 19 132-11 16-24 22-53 22-31 0-40 4-44 21-6 21-4 22 91 16 53-4 100-7 104-7s5-6 2-14-20-16-36-18l-31-3 28-33c80-95 56-176-57-196-33-6-38-10-38-35 0-35 40-79 79-87 25-5 28-9 19-24-9-14-18-16-47-9-49 12-147 11-212-1-48-9-55-8-73 10l-20 20h38c46 0 76 23 76 57 0 44-17 63-58 63-72 0-139 63-127 119 6 28 48 74 76 83 23 8 0 25-41 32-43 7-43 7-34 30 8 21 16 20 107-12zM3115 570c-11-4-53-13-92-20-40-7-73-17-73-21s4-19 10-33l9-25-36 21c-78 47-182 17-220-62-22-47-29-132-13-171 24-58 109-74 207-40 52 17 52 17 55-3 2-13 9-19 18-17 91 24 129 30 153 25 28-6 28-5 25 38-3 41-4 43-36 43-25 0-31 3-26 15 4 8 9 52 12 97 4 69 7 83 23 88 13 4 19 16 19 35 0 34-8 40-35 30zm25-29c0-11-8-22-19-26-15-4-19-20-25-88-3-45-9-94-12-109-6-27-5-28 23-22 26 5 31 2 36-18 11-39 8-45-18-41-28 6-124-15-144-31-11-9-12-5-7 22 4 17 6 32 3 32-2 0-26-9-52-21-59-26-153-29-188-6-44 29-47 119-6 199 39 76 120 93 205 43 25-15 47-25 49-23 1 1-2 19-9 38l-11 35 75 16c99 22 100 22 100 0z"
          transform="matrix(.1 0 0 -.1 0 150)"
        ></motion.path>
        <motion.path
          d="M2829 394c-95-29-86-72 17-81 48-4 67 0 104 19 53 27 63 54 25 68-36 14-91 11-146-6zm155-19c-1-16-86-55-120-55-42 0-95 20-88 32 4 5 20 16 38 24 35 16 171 15 170-1zM2540 521c0-17-3-18-37-5-52 18-133 18-161-2-18-12-22-25-22-70 0-67 18-113 56-143 24-19 38-22 89-19 33 2 67 7 76 12 15 6 15 2 7-45-12-65-33-98-67-105-14-3-39-9-56-14-24-7-21-7 15-3 82 10 115 49 127 154l6 48-39-19c-75-39-158-18-189 46-8 18-15 57-15 87 0 51 2 55 30 67 36 15 117 8 161-14 27-13 29-13 29 5 0 22 0 22 36 9 15-6 42-11 61-12 28-1 33-5 33-26s-4-24-25-20c-30 6-30 7-4-62 16-42 20-70 17-120-8-111-45-156-141-172-111-18-214 12-244 72-8 16-13 19-13 9 0-27 38-67 78-80 20-8 75-13 122-13 105 1 158 24 186 81 26 53 27 194 1 241l-18 33 23-3c20-3 23 2 26 35 3 36 3 37-33 37-19 0-52 7-72 15-44 19-43 19-43-4zM1990 503c-97-51-129-128-89-210 29-56 61-81 125-98 67-17 130-3 171 37 34 33 64 104 62 147-1 17-4 12-10-16-13-71-38-112-84-138-73-43-160-31-227 33-106 99-14 247 162 260 93 6 135-13 150-68 6-23 13-40 15-38 10 9-17 76-36 94-16 15-40 20-103 22-73 3-86 1-136-25z"
          transform="matrix(.1 0 0 -.1 0 150)"
          variants={icon}
          initial="hidden"
          animate="visible"
          transition={{
            default: { duration: 2, ease: "easeInOut" },
            fill: { duration: 2, ease: [1, 0, 0.8, 1] }
          }}
        ></motion.path>
        <motion.path
          d="M2403 430c-78-32 69-93 156-65 31 9 23 34-19 56-37 20-100 24-137 9zm136-24c37-17 26-31-28-34-53-3-131 22-115 37 21 21 96 19 143-3zM2049 416c-107-29-141-89-64-114 72-25 198 8 225 58 14 26-19 60-59 60-16 0-35 2-43 4-7 3-34-1-59-8zm147-28c14-14 14-17-7-37-34-31-119-54-173-46-82 13-83 49-1 87 49 23 156 21 181-4zM2310 253c-20-10-36-27-37-38-3-19-2-18 6 1 19 43 139 60 181 26 22-18 22-18 2-42-11-13-34-29-53-35-32-11-52-35-29-35 6 0 8 5 5 10-3 6 2 10 12 10 28 0 79 36 86 59 9 36-15 54-79 58-43 3-68-1-94-14z"
          transform="matrix(.1 0 0 -.1 0 150)"
          variants={icon}
          initial="hidden"
          animate="visible"
          transition={{
            default: { duration: 2, ease: "easeInOut" },
            fill: { duration: 2, ease: [1, 0, 0.8, 1] }
          }}
        ></motion.path>
      </g>
    </motion.svg>
  </div>
        
    );
};

export default Logo;