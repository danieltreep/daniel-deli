const data = {
    products: [
        {
            id: 1,
            name: "Apple",
            price: 0.25,
            keywords: ["fruit", "apple"],
            svg: 
                <svg width="53" height="60" viewBox="0 0 53 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M27.0754 55.0943L26.4711 54.9122L25.8717 55.11C17.388 57.9099 11.6148 56.1942 7.91444 52.5858C4.08463 48.8512 2.08824 42.7184 2.08411 36.0368C2.08002 29.41 4.17153 24.6806 7.85283 22.1366C11.5562 19.5773 17.4402 18.8296 25.9028 21.4699L26.6194 21.6935L27.3061 21.3904C35.4545 17.7936 41.2172 19.182 44.9566 22.3128C48.8383 25.5627 50.909 30.9936 50.9129 36.0396C50.9169 41.0901 48.8535 47.1298 44.8426 51.2384C40.9424 55.2336 35.1089 57.5144 27.0754 55.0943Z" fill="#FC2727" stroke="black" strokeWidth="4"/>
                    <path d="M26.5074 21.5974C26.1937 15.6334 25.231 12.4532 21.6728 7.17421" stroke="black" strokeWidth="4"/>
                    <path d="M12.3824 30.585C9.08059 35.0789 9.32873 39.2932 12.3824 45.5645" stroke="black" strokeWidth="4"/>
                    <path d="M41.2315 5.9459C41.6442 7.5782 41.1363 8.78859 39.9293 9.86005C38.6277 11.0156 36.572 11.9222 34.2116 12.5958C31.8896 13.2584 29.4659 13.6424 27.601 13.8597C26.9757 13.9326 26.4185 13.9861 25.9558 14.025L24.5606 11.0425C25.0167 10.7147 25.5889 10.3128 26.2478 9.86874C28.0033 8.68586 30.3355 7.23109 32.7126 6.08078C35.159 4.89691 37.3759 4.1752 38.972 4.17936C39.7238 4.18132 40.1639 4.34464 40.43 4.53442C40.6768 4.71044 41.0119 5.07768 41.2315 5.9459Z" fill="#14D027" stroke="black" strokeWidth="4"/>
                </svg>
            
        },
        {
            id: 2,
            name: "Milk",
            price: 1.45,
            keywords: ["dairy", "drink", "milk"],
            svg: 
                <svg width="32" height="60" viewBox="0 0 32 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.94865 17.4683C4.75695 14.535 6.09163 11.5884 8.22704 7.84874H24.4633C26.4589 11.6632 27.7409 14.6653 28.5579 17.6219C29.2998 20.307 29.6757 23.0184 29.8117 26.3428H2.86166C2.88847 22.9046 3.20902 20.1524 3.94865 17.4683Z" fill="white" stroke="black" strokeWidth="4"/>
                    <mask id="path-2-inside-1_3_1230" fill="white">
                    <rect x="0.876038" y="22.7193" width="30.9887" height="30.9294" rx="2"/>
                    </mask>
                    <rect x="0.876038" y="22.7193" width="30.9887" height="30.9294" rx="2" fill="white" stroke="black" strokeWidth="8" mask="url(#path-2-inside-1_3_1230)"/>
                    <mask id="path-3-inside-2_3_1230" fill="white">
                    <rect x="0.876038" y="22.7193" width="30.9887" height="14.0588" rx="2"/>
                    </mask>
                    <rect x="0.876038" y="22.7193" width="30.9887" height="14.0588" rx="2" fill="#1890FF" stroke="black" strokeWidth="8" mask="url(#path-3-inside-2_3_1230)"/>
                    <mask id="path-4-inside-3_3_1230" fill="white">
                    <rect x="3.97491" y="0.22522" width="24.791" height="8.43528" rx="2"/>
                    </mask>
                    <rect x="3.97491" y="0.22522" width="24.791" height="8.43528" rx="2" fill="#1890FF" stroke="black" strokeWidth="8" mask="url(#path-4-inside-3_3_1230)"/>
                </svg>   
        },
        {
            id: 3,
            name: "Burger",
            price: 9.75,
            keywords: ["burger", "fastfood"],
            svg: 
                <svg width="60" height="60" viewBox="0 0 69 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="5.41058" y="2.05405" width="57.3452" height="48.9715" rx="5" fill="#FFCB45" stroke="black" strokeWidth="4"/>
                    <path d="M53.8037 33.5563L49.4881 40.4773L45.0401 33.6257L53.8037 33.5563Z" fill="#FBFFCF" stroke="black" strokeWidth="4"/>
                    <rect x="2.03735" y="23.4791" width="64.0917" height="12.2429" rx="4" fill="#FF493E" stroke="black" strokeWidth="4"/>
                    <path d="M2.03735 21.3576C2.03735 19.1485 3.82821 17.3576 6.03735 17.3576H62.1291C64.3382 17.3576 66.1291 19.1485 66.1291 21.3576V25.2219C66.1291 27.5735 64.1099 29.417 61.7694 29.1885C44.3504 27.4879 27.5877 25.3677 6.83132 28.7366C4.3428 29.1405 2.03735 27.2518 2.03735 24.7307V21.3576Z" fill="#14D027" stroke="black" strokeWidth="4"/>
                    <ellipse cx="17.217" cy="12.7665" rx="1.68662" ry="1.53036" fill="#5E4427"/>
                    <ellipse cx="17.217" cy="40.313" rx="1.68662" ry="1.53036" fill="#5E4427"/>
                    <ellipse cx="27.3367" cy="43.3737" rx="1.68662" ry="1.53036" fill="#5E4427"/>
                    <ellipse cx="37.4565" cy="40.313" rx="1.68662" ry="1.53036" fill="#5E4427"/>
                    <ellipse cx="27.3367" cy="9.70583" rx="1.68662" ry="1.53036" fill="#5E4427"/>
                    <ellipse cx="37.4565" cy="12.7665" rx="1.68662" ry="1.53036" fill="#5E4427"/>
                    <ellipse cx="47.5762" cy="9.70583" rx="1.68662" ry="1.53036" fill="#5E4427"/>
                </svg>
            
        },
        {
            id: 4,
            name: "Juice",
            price: 3.25,
            keywords: ["fruit", "drink", "juice"],
            svg: 
                <svg width="43" height="60" viewBox="0 0 43 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="5.19691" height="35.0865" rx="1" transform="matrix(0.972329 0.233617 -0.323782 0.946132 32.8302 2.07806)" fill="white" stroke="black" strokeWidth="4"/>
                    <path d="M9.97296 53.5015L3.21376 16.6883H39.6274L32.8682 53.5015H9.97296Z" stroke="black" strokeWidth="4"/>
                    <path d="M10.0073 53.5015L5.03802 22.9673H37.8026L32.8333 53.5015H10.0073Z" fill="#FF9345" stroke="black" strokeWidth="4"/>
                </svg>
            
        },
        {
            id: 5,
            name: "Fries",
            price: 4.99,
            keywords: ["fries", "fastfood"],
            svg: 
                <svg width="56" height="60" viewBox="0 0 56 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.58 6.26999L7.93453 2.49659L14.7033 39.1973L24.3818 37.7278L18.58 6.26999Z" fill="#FFCB45" stroke="black" strokeWidth="3"/>
                    <path d="M4.31731 15.9608L13.7922 11.7117L15.948 36.5657L6.16513 37.2643L4.31731 15.9608Z" fill="#FFCB45" stroke="black" strokeWidth="3"/>
                    <path d="M38.2062 9.83154L27.5607 6.05815L34.3294 42.7589L44.0079 41.2893L38.2062 9.83154Z" fill="#FFCB45" stroke="black" strokeWidth="3"/>
                    <path d="M31.3409 19.5224L21.866 15.2732L19.7102 40.1273L29.4931 40.8259L31.3409 19.5224Z" fill="#FFCB45" stroke="black" strokeWidth="3"/>
                    <path d="M43.2233 15.2244L53.5497 13.1813L49.0147 37.7703L39.3362 36.3007L43.2233 15.2244Z" fill="#FFCB45" stroke="black" strokeWidth="3"/>
                    <path d="M9.66415 70.3637L1.94233 34.5811H53.1791L45.4573 70.3637C45.4077 70.5939 45.2041 70.7583 44.9686 70.7583H10.1529C9.9174 70.7583 9.71383 70.5939 9.66415 70.3637ZM53.3098 33.9756L53.3096 33.9767L53.3098 33.9756Z" fill="#FC2727" stroke="black" strokeWidth="3"/>
                    <path d="M36.7559 48.5145V48.5145C36.7559 48.4842 36.7561 48.4511 36.7563 48.4154C36.7605 47.7269 36.7707 46.06 35.4556 44.6322C34.0889 43.1482 31.6397 42.2658 27.5608 42.2658C23.3937 42.2658 20.9595 43.3725 19.6244 44.9496C18.3551 46.4491 18.3635 48.0625 18.3656 48.4745C18.3657 48.4894 18.3658 48.5028 18.3658 48.5145C18.3657 51.5252 19.9616 53.4623 21.9107 54.568C23.7788 55.6276 25.9837 55.9504 27.5608 55.9504C29.1379 55.9504 31.3429 55.6276 33.2109 54.568C35.1599 53.4623 36.7558 51.5252 36.7559 48.5145Z" fill="white" stroke="black" strokeWidth="3"/>
                </svg>
            
        },
        {
            id: 6,
            name: "Eggs",
            price: 2.39,
            keywords: ["eggs", "dairy"],
            svg: 
                <svg width="60" height="60" viewBox="0 0 65 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M49.3736 28.9139C48.3152 33.9474 45.7041 36.7528 42.6287 38.4104C39.4521 40.1226 35.6646 40.667 32.2695 40.8492C29.0486 41.0222 25.3095 40.4904 22.1599 38.7103C19.0813 36.9704 16.4445 33.977 15.3799 28.9138C14.3296 23.9185 15.9018 17.1109 19.2833 11.4823C22.6903 5.81139 27.4908 2.03 32.3767 2.03003C37.2626 2.03005 42.0631 5.81146 45.4701 11.4824C48.8517 17.111 50.424 23.9185 49.3736 28.9139Z" fill="#FFF6C8" stroke="black" strokeWidth="4"/>
                    <path d="M62.2532 40.6002C61.1949 45.6337 58.5838 48.4392 55.5084 50.0968C52.3318 51.8089 48.5442 52.3533 45.1491 52.5356C41.9283 52.7085 38.1891 52.1768 35.0395 50.3967C31.961 48.6568 29.3242 45.6633 28.2596 40.6002C27.2092 35.6049 28.7814 28.7973 32.163 23.1687C35.57 17.4978 40.3704 13.7164 45.2563 13.7164C50.1423 13.7164 54.9427 17.4978 58.3498 23.1688C61.7314 28.7973 63.3036 35.6049 62.2532 40.6002Z" fill="#FFF6C8" stroke="black" strokeWidth="4"/>
                    <path d="M36.4939 48.3911C35.4355 53.4246 32.8244 56.2301 29.749 57.8877C26.5724 59.5998 22.7849 60.1442 19.3898 60.3265C16.1689 60.4994 12.4298 59.9676 9.28017 58.1876C6.20164 56.4477 3.56484 53.4542 2.50022 48.3911C1.44986 43.3958 3.02208 36.5882 6.40363 30.9596C9.81064 25.2887 14.6111 21.5073 19.497 21.5073C24.3829 21.5073 29.1834 25.2887 32.5904 30.9597C35.972 36.5882 37.5443 43.3958 36.4939 48.3911Z" fill="#FFF6C8" stroke="black" strokeWidth="4"/>
                </svg>
            
        },
        {
            id: 7,
            name: "Carrot",
            price: 0.45,
            keywords: ["vegetable", "carrot"],
            svg: 
                <svg width="70" height="60" viewBox="0 0 69 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M29.6899 40.5672C32.1247 39.9187 33.5911 37.9066 35.2703 35.581" stroke="black" strokeWidth="3" strokeLinecap="round"/>
                    <path d="M15.6955 4.62838C14.9614 4.98664 14.5554 5.40504 14.3276 5.83093C14.094 6.26779 13.996 6.81096 14.0594 7.4837C14.1906 8.87533 14.989 10.5823 16.1442 12.3426C17.2786 14.071 18.6591 15.7055 19.77 16.9191C20.1354 17.3183 20.4689 17.669 20.7512 17.9591L26.5797 14.3124C26.4303 13.9677 26.2413 13.548 26.0156 13.0769C25.3756 11.741 24.4553 10.0254 23.3175 8.44242C22.1613 6.83379 20.8745 5.49617 19.5506 4.76819C18.3301 4.09715 17.1038 3.94115 15.6955 4.62838Z" fill="#14D027" stroke="black" strokeWidth="3"/>
                    <path d="M4.10899 18.0965C3.70032 18.6985 3.59093 19.2 3.62509 19.6374C3.66098 20.0969 3.86621 20.607 4.29623 21.1694C5.18106 22.3266 6.8173 23.4478 8.77522 24.4457C10.6986 25.4259 12.78 26.2121 14.3964 26.756C14.943 26.9399 15.4327 27.0949 15.8405 27.2193L18.7663 21.6128C18.448 21.3818 18.0536 21.103 17.5985 20.796C16.3196 19.9336 14.5892 18.8679 12.7409 18.0143C10.8643 17.1476 9.00568 16.5659 7.44163 16.5364C5.97476 16.5088 4.88721 16.9502 4.10899 18.0965Z" fill="#14D027" stroke="black" strokeWidth="3"/>
                    <path d="M5.54992 6.78073C4.98101 7.17611 4.74187 7.59839 4.66808 8.06077C4.58661 8.57126 4.69287 9.24262 5.06735 10.0886C5.82423 11.7986 7.4802 13.7917 9.48522 15.7539C11.4635 17.6899 13.6695 19.4892 15.3921 20.811C16.1003 21.3544 16.723 21.8143 17.2095 22.1666L22.0305 17.7058C21.7005 17.2827 21.2641 16.7361 20.7418 16.1104C19.4907 14.6117 17.7634 12.6798 15.8349 10.9086C13.8853 9.11798 11.8273 7.58304 9.92442 6.77788C8.04404 5.98225 6.65101 6.01551 5.54992 6.78073Z" fill="#14D027" stroke="black" strokeWidth="3"/>
                    <path d="M59.2101 51.6336C59.2745 51.6418 59.3291 51.6467 59.375 51.6494C59.3817 51.4519 59.348 51.1374 59.223 50.6804C59.0768 50.1462 58.8281 49.4964 58.4739 48.7368C57.0438 45.6698 54.1315 41.3076 50.605 36.6059C43.5589 27.2116 34.3754 16.8711 30.6306 13.5587C29.1555 12.2539 27.448 11.9792 25.5786 12.4366C23.6202 12.9158 21.4928 14.2146 19.5708 16.0786C17.6636 17.9283 16.063 20.2354 15.1091 22.5685C14.1485 24.9184 13.8949 27.1635 14.4694 28.9598C14.7261 29.7624 15.3841 30.7454 16.5115 31.8829C17.6249 33.0063 19.1169 34.2018 20.9103 35.4345C24.4967 37.8995 29.163 40.428 34.0885 42.7445C39.0072 45.0576 44.1421 47.1395 48.6433 48.7175C53.181 50.3083 56.9613 51.3465 59.2101 51.6336Z" fill="#FF9345" stroke="black" strokeWidth="3"/>
                    <path d="M42.48 37.3826C40.0153 39.3839 38.8344 41.1541 36.8996 44.862" stroke="black" strokeWidth="3"/>
                    <path d="M40.8507 25.6084C37.5325 27.5812 37.9528 26.7839 35.2705 30.5947" stroke="black" strokeWidth="3"/>
                    <path d="M28.5736 24.8605C24.9346 27.8685 23.1301 30.1189 20.203 34.833" stroke="black" strokeWidth="3"/>
                </svg>
            
        },
        {
            id: 8,
            name: "Fish",
            price: 3.95,
            keywords: ["fish", "animal"],
            svg: 
                <svg width="58" height="60" viewBox="0 0 58 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M33.9042 17.2928C28.5426 17.1221 23.3729 14.5411 14.7922 9.59571C24.8077 3.79281 30.9084 1.95454 36.3424 2.38394C41.5813 2.79792 46.3873 5.30487 53.7359 9.13815C54.0766 9.31584 54.4227 9.49638 54.7746 9.67969C45.0261 15.2314 39.2519 17.463 33.9042 17.2928Z" fill="#C4C4C4" stroke="black" strokeWidth="3"/>
                    <path d="M6.54672 4.7655L14.455 9.81305L6.54672 14.8606L6.54672 4.7655Z" fill="#C4C4C4" stroke="black" strokeWidth="3"/>
                    <mask id="path-3-inside-1_13_2" fill="white">
                    <ellipse cx="41.6355" cy="9.81307" rx="2.71028" ry="2.24718"/>
                    </mask>
                    <ellipse cx="41.6355" cy="9.81307" rx="2.71028" ry="2.24718" fill="#C4C4C4"/>
                    <path d="M41.3458 9.81307C41.3458 9.40223 41.5544 9.16124 41.6372 9.09263C41.7135 9.02929 41.7227 9.06024 41.6355 9.06024V15.0602C44.2385 15.0602 47.3458 13.2126 47.3458 9.81307H41.3458ZM41.6355 9.06024C41.5483 9.06024 41.5575 9.02929 41.6339 9.09263C41.7166 9.16124 41.9252 9.40223 41.9252 9.81307H35.9252C35.9252 13.2126 39.0325 15.0602 41.6355 15.0602V9.06024ZM41.9252 9.81307C41.9252 10.2239 41.7166 10.4649 41.6339 10.5335C41.5575 10.5968 41.5483 10.5659 41.6355 10.5659V4.56589C39.0325 4.56589 35.9252 6.4135 35.9252 9.81307H41.9252ZM41.6355 10.5659C41.7227 10.5659 41.7135 10.5968 41.6372 10.5335C41.5544 10.4649 41.3458 10.2239 41.3458 9.81307H47.3458C47.3458 6.4135 44.2385 4.56589 41.6355 4.56589V10.5659Z" fill="black" mask="url(#path-3-inside-1_13_2)"/>
                    <path d="M23.4668 32.382L25.3657 33.5259L23.2215 34.3174L23.4668 32.382Z" fill="#C4C4C4" stroke="black" strokeWidth="3"/>
                    <path d="M41.1884 30.4688L41.5758 32.3882L39.3773 31.7067L41.1884 30.4688Z" fill="#C4C4C4" stroke="black" strokeWidth="3"/>
                    <path d="M31.9839 30.046L33.3965 31.6002L31.0668 31.8374L31.9839 30.046Z" fill="#C4C4C4" stroke="black" strokeWidth="3"/>
                    <path d="M33.9042 46.5059C28.5426 46.3353 23.3729 43.7543 14.7922 38.8089C24.8077 33.006 30.9084 31.1677 36.3424 31.5971C41.5813 32.0111 46.3873 34.518 53.7359 38.3513C54.0766 38.529 54.4227 38.7095 54.7746 38.8929C45.0261 44.4446 39.2519 46.6762 33.9042 46.5059Z" fill="#DA6666" stroke="black" strokeWidth="3"/>
                    <path d="M6.54672 33.9787L14.455 39.0262L6.54672 44.0738L6.54672 33.9787Z" fill="#DA6666" stroke="black" strokeWidth="3"/>
                    <mask id="path-10-inside-2_13_2" fill="white">
                    <ellipse cx="41.6355" cy="39.0262" rx="2.71028" ry="2.24718"/>
                    </mask>
                    <ellipse cx="41.6355" cy="39.0262" rx="2.71028" ry="2.24718" fill="#DA6666"/>
                    <path d="M41.3458 39.0262C41.3458 38.6154 41.5544 38.3744 41.6372 38.3058C41.7135 38.2425 41.7227 38.2734 41.6355 38.2734V44.2734C44.2385 44.2734 47.3458 42.4258 47.3458 39.0262H41.3458ZM41.6355 38.2734C41.5483 38.2734 41.5575 38.2425 41.6339 38.3058C41.7166 38.3744 41.9252 38.6154 41.9252 39.0262H35.9252C35.9252 42.4258 39.0325 44.2734 41.6355 44.2734V38.2734ZM41.9252 39.0262C41.9252 39.4371 41.7166 39.6781 41.6339 39.7467C41.5575 39.81 41.5483 39.7791 41.6355 39.7791V33.7791C39.0325 33.7791 35.9252 35.6267 35.9252 39.0262H41.9252ZM41.6355 39.7791C41.7227 39.7791 41.7135 39.81 41.6372 39.7467C41.5544 39.6781 41.3458 39.4371 41.3458 39.0262H47.3458C47.3458 35.6267 44.2385 33.7791 41.6355 33.7791V39.7791Z" fill="black" mask="url(#path-10-inside-2_13_2)"/>
                </svg>
            
        },
        
    ]
}

export default data;