import { createContext, useState } from "react";
export let DataContext = createContext()
export function DataContextProvider(props) {
    const [AllProduct, setAllProduct] = useState(


        [


            {
                id: "1",
                price: "400",
                desc: "Small Vintage 1 ",
                SKU: "  0001",
                img: "https://static.wixstatic.com/media/ea71bb_47c995fa95724f998485903107f14308~mv2_d_2487_3298_s_4_2.jpg/v1/fill/w_500,h_663,al_c,q_85,usm_0.66_1.00_0.01/ea71bb_47c995fa95724f998485903107f14308~mv2_d_2487_3298_s_4_2.webp",
                "best_sellers": "false",
                category: "bags",
                count: "1",
                title: "Satchel bags are large bags used for casual occasions. The bag part is a big loose sack connected to a long strap. The strap is usually worn on the shoulder and crossed over the body so the bag rests on the opposite hip. Women usually wear satchel bags, but it's also acceptable for men to wear them."
            },
            {
                id: "2",
                price: "400",
                desc: "Small Vintage 2",
                SKU: "0002",
                count: "1",
                img: "https://static.wixstatic.com/media/ea71bb_4f91ddb36f2346c9870d41f83ee4c93e~mv2_d_2487_3298_s_4_2.jpg/v1/fill/w_500,h_663,al_c,q_85,usm_0.66_1.00_0.01/ea71bb_4f91ddb36f2346c9870d41f83ee4c93e~mv2_d_2487_3298_s_4_2.webp",
                "best_sellers": "true",
                category: "bags",
                title: "Satchel bags are large bags used for casual occasions. The bag part is a big loose sack connected to a long strap. The strap is usually worn on the shoulder and crossed over the body so the bag rests on the opposite hip. Women usually wear satchel bags, but it's also acceptable for men to wear them."
            },
            {
                id: "3",
                price: "400",
                desc: "Small Vintage 3",
                SKU: "0003",
                img: "https://static.wixstatic.com/media/ea71bb_7a7a685b6efe4d4ab57bd5f16ea1e4fa~mv2_d_2487_3298_s_4_2.jpg/v1/fill/w_166,h_221,al_c,q_80,usm_0.66_1.00_0.01/ea71bb_7a7a685b6efe4d4ab57bd5f16ea1e4fa~mv2_d_2487_3298_s_4_2.webp",
                "best_sellers": "false",
                category: "bags",
                count: "1",
                title: "Satchel bags are large bags used for casual occasions. The bag part is a big loose sack connected to a long strap. The strap is usually worn on the shoulder and crossed over the body so the bag rests on the opposite hip. Women usually wear satchel bags, but it's also acceptable for men to wear them."

            },
            {
                id: "4",
                price: "400",
                desc: "Small Vintage 4",
                SKU: "0004",
                img: "https://static.wixstatic.com/media/ea71bb_80836aa923e34b34b4f1df8b47eb2197~mv2_d_2487_3298_s_4_2.jpg/v1/fill/w_500,h_663,al_c,q_85,usm_0.66_1.00_0.01/ea71bb_80836aa923e34b34b4f1df8b47eb2197~mv2_d_2487_3298_s_4_2.webp",
                best_sellers: "true",
                category: "bags",
                count: "1",
                title: "Satchel bags are large bags used for casual occasions. The bag part is a big loose sack connected to a long strap. The strap is usually worn on the shoulder and crossed over the body so the bag rests on the opposite hip. Women usually wear satchel bags, but it's also acceptable for men to wear them."
            },
            {
                id: "5",
                price: "400",
                desc: "Small Vintage 5",
                count: "1",
                SKU: "0005",
                img: "https://static.wixstatic.com/media/ea71bb_0c099c6223b949b789ec35c279acd873~mv2_d_3444_4568_s_4_2.jpg/v1/fill/w_500,h_663,al_c,q_85,usm_0.66_1.00_0.01/ea71bb_0c099c6223b949b789ec35c279acd873~mv2_d_3444_4568_s_4_2.webp",
                best_sellers: "true",
                category: "bags",
                title: "Satchel bags are large bags used for casual occasions. The bag part is a big loose sack connected to a long strap. The strap is usually worn on the shoulder and crossed over the body so the bag rests on the opposite hip. Women usually wear satchel bags, but it's also acceptable for men to wear them."
            },
            {
                id: "6",
                price: "400",
                desc: "Small Vintage 6",
                SKU: "0006",
                img: "  https://static.wixstatic.com/media/ea71bb_63af2b0b5b0644f286581a4cf2f35c2c~mv2_d_3444_4568_s_4_2.jpg/v1/fill/w_241,h_322,al_c,q_80,usm_0.66_1.00_0.01/ea71bb_63af2b0b5b0644f286581a4cf2f35c2c~mv2_d_3444_4568_s_4_2.webp",
                best_sellers: "false",
                category: "bags",
                count: "1",
                title: "Satchel bags are large bags used for casual occasions. The bag part is a big loose sack connected to a long strap. The strap is usually worn on the shoulder and crossed over the body so the bag rests on the opposite hip. Women usually wear satchel bags, but it's also acceptable for men to wear them."
            },
            {
                id: "7",
                price: "400",
                desc: "Small Vintage 7",
                SKU: "0007",
                img: "https://static.wixstatic.com/media/ea71bb_f9b13334143b4102bc6e743068a83dd0~mv2_d_3444_4568_s_4_2.jpg/v1/fill/w_241,h_322,al_c,q_80,usm_0.66_1.00_0.01/ea71bb_f9b13334143b4102bc6e743068a83dd0~mv2_d_3444_4568_s_4_2.webp",
                best_sellers: "false",
                category: "bags",
                count: "1",
                title: "Satchel bags are large bags used for casual occasions. The bag part is a big loose sack connected to a long strap. The strap is usually worn on the shoulder and crossed over the body so the bag rests on the opposite hip. Women usually wear satchel bags, but it's also acceptable for men to wear them."
            },
            {
                id: "8",
                price: "400",
                desc: "Small Vintage 8",
                SKU: "0008",
                img: "https://static.wixstatic.com/media/ea71bb_83f0d2bab3eb41d1b735a26bd6836a8d~mv2_d_3444_4568_s_4_2.jpg/v1/fill/w_241,h_322,al_c,q_80,usm_0.66_1.00_0.01/ea71bb_83f0d2bab3eb41d1b735a26bd6836a8d~mv2_d_3444_4568_s_4_2.webp",
                best_sellers: "true",
                count: "1",
                category: "bags",
                title: "Satchel bags are large bags used for casual occasions. The bag part is a big loose sack connected to a long strap. The strap is usually worn on the shoulder and crossed over the body so the bag rests on the opposite hip. Women usually wear satchel bags, but it's also acceptable for men to wear them."

            },

            {
                id: "9",
                price: "400",
                desc: "Small Vintage 10",
                count: "1",
                SKU: "0010",
                img: "https://static.wixstatic.com/media/ea71bb_c35f68f9e8a64f5498a99d107d899ee2~mv2_d_2629_3487_s_4_2.jpg/v1/fill/w_500,h_663,al_c,q_85,usm_0.66_1.00_0.01/ea71bb_c35f68f9e8a64f5498a99d107d899ee2~mv2_d_2629_3487_s_4_2.webp",
                best_sellers: "false",
                category: "bags",
                title: "Satchel bags are large bags used for casual occasions. The bag part is a big loose sack connected to a long strap. The strap is usually worn on the shoulder and crossed over the body so the bag rests on the opposite hip. Women usually wear satchel bags, but it's also acceptable for men to wear them."
            },

            {
                id: "10",
                count: "1",
                price: "400",
                desc: "Small Vintage 11 ",
                SKU: "0011",
                img: "https://static.wixstatic.com/media/ea71bb_fe4605fcf8b74a439ad933c7253d7779~mv2_d_2629_3487_s_4_2.jpg/v1/fill/w_500,h_663,al_c,q_85,usm_0.66_1.00_0.01/ea71bb_fe4605fcf8b74a439ad933c7253d7779~mv2_d_2629_3487_s_4_2.webp",
                best_sellers: "false",
                category: "bags",
                title: "Satchel bags are large bags used for casual occasions. The bag part is a big loose sack connected to a long strap. The strap is usually worn on the shoulder and crossed over the body so the bag rests on the opposite hip. Women usually wear satchel bags, but it's also acceptable for men to wear them."
            },
            {
                id: "11",
                price: "400",
                desc: "Small Vintage 12 ",
                SKU: "0012",
                img: "https://static.wixstatic.com/media/ea71bb_1a8563a684334d27b0734f87b6f7c998~mv2_d_2629_3487_s_4_2.jpg/v1/fill/w_500,h_663,al_c,q_85,usm_0.66_1.00_0.01/ea71bb_1a8563a684334d27b0734f87b6f7c998~mv2_d_2629_3487_s_4_2.webp",
                best_sellers: "false",
                category: "bags",
                count: "1",
                title: "Satchel bags are large bags used for casual occasions. The bag part is a big loose sack connected to a long strap. The strap is usually worn on the shoulder and crossed over the body so the bag rests on the opposite hip. Women usually wear satchel bags, but it's also acceptable for men to wear them."
            },

            {
                id: "12",
                price: "400",
                desc: "Small Vintage 13 ",
                SKU: "0013",
                img: "https://static.wixstatic.com/media/ea71bb_c9e22cba4e534026a1a7be3b15a8a648~mv2_d_2629_3487_s_4_2.jpg/v1/fill/w_500,h_663,al_c,q_85,usm_0.66_1.00_0.01/ea71bb_c9e22cba4e534026a1a7be3b15a8a648~mv2_d_2629_3487_s_4_2.webp",
                best_sellers: "true",
                category: "bags",
                count: "1",
                title: "Satchel bags are large bags used for casual occasions. The bag part is a big loose sack connected to a long strap. The strap is usually worn on the shoulder and crossed over the body so the bag rests on the opposite hip. Women usually wear satchel bags, but it's also acceptable for men to wear them."
            },
            {
                id: "13",
                price: "400",
                desc: "Small Vintage 14",
                count: "1",
                SKU: "0014",
                img: "https://static.wixstatic.com/media/ea71bb_df1129cff14a498db09ae503498d60e6~mv2_d_2487_3298_s_4_2.jpg/v1/fill/w_500,h_663,al_c,q_85,usm_0.66_1.00_0.01/ea71bb_df1129cff14a498db09ae503498d60e6~mv2_d_2487_3298_s_4_2.webp",
                best_sellers: "true",
                category: "bags",
                title: "Satchel bags are large bags used for casual occasions. The bag part is a big loose sack connected to a long strap. The strap is usually worn on the shoulder and crossed over the body so the bag rests on the opposite hip. Women usually wear satchel bags, but it's also acceptable for men to wear them."
            },
            {
                id: "14",
                price: "400",
                desc: "Small Vintage 15",
                SKU: "0015",
                img: "https://static.wixstatic.com/media/ea71bb_9557e7ec12d6432d8d2381bfd51e7bd5~mv2_d_2487_3298_s_4_2.jpg/v1/fill/w_500,h_663,al_c,q_85,usm_0.66_1.00_0.01/ea71bb_9557e7ec12d6432d8d2381bfd51e7bd5~mv2_d_2487_3298_s_4_2.webp",
                best_sellers: "false",
                category: "bags",
                count: "1",
                title: "Satchel bags are large bags used for casual occasions. The bag part is a big loose sack connected to a long strap. The strap is usually worn on the shoulder and crossed over the body so the bag rests on the opposite hip. Women usually wear satchel bags, but it's also acceptable for men to wear them."
            },
            {
                id: "15",
                price: "400",
                desc: "Small Vintage 16 ",
                count: "1",
                SKU: "0016",
                img: "https://static.wixstatic.com/media/ea71bb_92ce1b162b474c978b9afe376cc3b892~mv2_d_2487_3298_s_4_2.jpg/v1/fill/w_500,h_663,al_c,q_85,usm_0.66_1.00_0.01/ea71bb_92ce1b162b474c978b9afe376cc3b892~mv2_d_2487_3298_s_4_2.webp",
                best_sellers: "false",
                category: "bags",
                title: "Satchel bags are large bags used for casual occasions. The bag part is a big loose sack connected to a long strap. The strap is usually worn on the shoulder and crossed over the body so the bag rests on the opposite hip. Women usually wear satchel bags, but it's also acceptable for men to wear them."
            },
            {
                id: "16",
                price: "400",
                count: "1",
                desc: "Small Vintage 17",
                SKU: "0017",
                img: "https://static.wixstatic.com/media/ea71bb_73a2095ecc00461bbd42a7e9394935e9~mv2_d_2487_3298_s_4_2.jpg/v1/fill/w_500,h_663,al_c,q_85,usm_0.66_1.00_0.01/ea71bb_73a2095ecc00461bbd42a7e9394935e9~mv2_d_2487_3298_s_4_2.webp",
                best_sellers: "false",
                category: "bags",
                title: "Satchel bags are large bags used for casual occasions. The bag part is a big loose sack connected to a long strap. The strap is usually worn on the shoulder and crossed over the body so the bag rests on the opposite hip. Women usually wear satchel bags, but it's also acceptable for men to wear them."
            },
            {
                id: "17",
                price: "100",
                desc: "Mini leather goods 1",
                SKU: "0018",
                count: "1",
                img: "https://static.wixstatic.com/media/ea71bb_3061929daf1f4dfd9093dd86ba8f0ce9~mv2_d_3078_4139_s_4_2.jpg/v1/fill/w_241,h_322,al_c,q_80,usm_0.66_1.00_0.01/ea71bb_3061929daf1f4dfd9093dd86ba8f0ce9~mv2_d_3078_4139_s_4_2.webp",
                best_sellers: "false",

                category: "Mini leather goods",
                title: 'Check out our small leather goods selection for the very best in unique or custom, handmade pieces from our wallets shops.'
            },
            {
                id: "18",
                price: "100",
                count: "1",
                desc: "Mini leather goods 2",
                SKU: "0019",
                img: "https://static.wixstatic.com/media/ea71bb_4dcf4698147a479c912875bb4ad67d1a~mv2_d_3078_4139_s_4_2.jpg/v1/fill/w_496,h_667,al_c,q_85,usm_0.66_1.00_0.01/ea71bb_4dcf4698147a479c912875bb4ad67d1a~mv2_d_3078_4139_s_4_2.webp",
                best_sellers: "false",
                category: "Mini leather goods",
                title: 'Check out our small leather goods selection for the very best in unique or custom, handmade pieces from our wallets shops.'

            },
            {
                id: "19",
                price: "100",
                desc: "Mini leather goods 3",
                SKU: "0020",
                img: "https://static.wixstatic.com/media/ea71bb_3fd7c4402f1a4290bd274c4afd283163~mv2_d_3078_4139_s_4_2.jpg/v1/fill/w_496,h_667,al_c,q_85,usm_0.66_1.00_0.01/ea71bb_3fd7c4402f1a4290bd274c4afd283163~mv2_d_3078_4139_s_4_2.webp",
                best_sellers: "false",
                category: "Mini leather goods",
                count: "1",
                title: 'Check out our small leather goods selection for the very best in unique or custom, handmade pieces from our wallets shops.'
            },
            {
                id: "20",
                price: "100",
                desc: "Mini leather goods 4",
                SKU: "0021",
                img: "https://static.wixstatic.com/media/ea71bb_1b8d9bf0acb948e1a496cebd2aa1bd81~mv2_d_3078_4139_s_4_2.jpg/v1/fill/w_496,h_667,al_c,q_85,usm_0.66_1.00_0.01/ea71bb_1b8d9bf0acb948e1a496cebd2aa1bd81~mv2_d_3078_4139_s_4_2.webp",
                best_sellers: "false",
                category: "Mini leather goods",
                count: "1",
                title: 'Check out our small leather goods selection for the very best in unique or custom, handmade pieces from our wallets shops.'
            },
            {
                id: "21",
                price: "100",
                desc: "Mini leather goods 5",
                count: "1",
                SKU: "0022",
                img: "https://static.wixstatic.com/media/ea71bb_36c6d68cd2a843118af8600f5df4645a~mv2_d_3078_4139_s_4_2.jpg/v1/fill/w_496,h_667,al_c,q_85,usm_0.66_1.00_0.01/ea71bb_36c6d68cd2a843118af8600f5df4645a~mv2_d_3078_4139_s_4_2.webp",
                best_sellers: "false",
                category: "Mini leather goods",
                title: 'Check out our small leather goods selection for the very best in unique or custom, handmade pieces from our wallets shops.'
            },
            {
                id: "22",
                price: "100",
                count: "1",
                desc: "Mini leather goods 6",
                SKU: "0023",
                img: "https://static.wixstatic.com/media/ea71bb_4ed9ee376def49cb94194d5814cf8574~mv2_d_3078_4139_s_4_2.jpg/v1/fill/w_496,h_667,al_c,q_85,usm_0.66_1.00_0.01/ea71bb_4ed9ee376def49cb94194d5814cf8574~mv2_d_3078_4139_s_4_2.webp",
                best_sellers: "false",
                category: "Mini leather goods",
                title: 'Check out our small leather goods selection for the very best in unique or custom, handmade pieces from our wallets shops.'
            },
            {
                id: "23",
                price: "100",
                desc: "Mini leather goods 7",
                count: "1",
                SKU: "0024",
                img: "https://static.wixstatic.com/media/ea71bb_c4dfe97aae164fd9927c3f32598ba86c~mv2_d_3078_4139_s_4_2.jpg/v1/fill/w_496,h_667,al_c,q_85,usm_0.66_1.00_0.01/ea71bb_c4dfe97aae164fd9927c3f32598ba86c~mv2_d_3078_4139_s_4_2.webp",
                best_sellers: "false",
                category: "Mini leather goods",
                title: 'Check out our small leather goods selection for the very best in unique or custom, handmade pieces from our wallets shops.'
            },
            {
                id: "24",
                price: "100",
                desc: "Mini leather goods 8",
                SKU: "0025",
                count: "1",
                img: "https://static.wixstatic.com/media/ea71bb_c8f5b35dd1674a38b347648acae300a2~mv2_d_3078_4139_s_4_2.jpg/v1/fill/w_496,h_667,al_c,q_85,usm_0.66_1.00_0.01/ea71bb_c8f5b35dd1674a38b347648acae300a2~mv2_d_3078_4139_s_4_2.webp",
                best_sellers: "false",
                category: "Mini leather goods",
                title: 'Check out our small leather goods selection for the very best in unique or custom, handmade pieces from our wallets shops.'
            },
            {
                id: "25",
                count: "1",
                price: "50",
                desc: "Leather Belts 1",
                SKU: "0026",
                img: "https://static.wixstatic.com/media/ea71bb_dcdf0ab619804441b0d5aff3adae701c~mv2_d_3613_4860_s_4_2.jpg/v1/fill/w_496,h_667,al_c,q_85,usm_0.66_1.00_0.01/ea71bb_dcdf0ab619804441b0d5aff3adae701c~mv2_d_3613_4860_s_4_2.webp",
                best_sellers: "false",
                category: "Leather Belts",
                size: "small ",
                title: 'If you are looking for a belt made out of high-quality leather and a strong silver buckle mechanism, this is your ideal pick. The texture and the elegant ...'
            },
            {
                id: "26",
                count: "1",
                price: "50",
                desc: "Leather Belts 2",
                SKU: "0027",
                img: "https://static.wixstatic.com/media/ea71bb_2d9236035ac24e9fa349cfacbbccc8fe~mv2_d_3613_4860_s_4_2.jpg/v1/fill/w_496,h_667,al_c,q_85,usm_0.66_1.00_0.01/ea71bb_2d9236035ac24e9fa349cfacbbccc8fe~mv2_d_3613_4860_s_4_2.webp",
                best_sellers: "false",
                category: "Leather Belts",
                size: "large ",
                title: 'If you are looking for a belt made out of high-quality leather and a strong silver buckle mechanism, this is your ideal pick. The texture and the elegant ...'
            },
            {
                id: "27",
                count: "1",
                price: "50",
                desc: "Leather Belts 3",
                SKU: "0028",
                img: "https://static.wixstatic.com/media/ea71bb_53d3251a93c7400fbb1703016d50bc7c~mv2_d_3613_4860_s_4_2.jpg/v1/fill/w_496,h_667,al_c,q_85,usm_0.66_1.00_0.01/ea71bb_53d3251a93c7400fbb1703016d50bc7c~mv2_d_3613_4860_s_4_2.webp",
                best_sellers: "false",
                category: "Leather Belts",
                size: "small ", title: 'If you are looking for a belt made out of high-quality leather and a strong silver buckle mechanism, this is your ideal pick. The texture and the elegant ...'
            },
            {
                id: "28",
                count: "1",
                price: "50",
                desc: "Leather Belts 4",
                SKU: "0029",
                img: "https://static.wixstatic.com/media/ea71bb_a487065a9eda45c6ba662246a7631d23~mv2_d_3613_4860_s_4_2.jpg/v1/fill/w_496,h_667,al_c,q_85,usm_0.66_1.00_0.01/ea71bb_a487065a9eda45c6ba662246a7631d23~mv2_d_3613_4860_s_4_2.webp",
                best_sellers: "false",
                category: "Leather Belts",
                size: "large ",
                title: 'If you are looking for a belt made out of high-quality leather and a strong silver buckle mechanism, this is your ideal pick. The texture and the elegant ...'
            },
            {
                id: "29",
                price: "50",
                count: "1",
                desc: "Leather Belts 5",
                SKU: "0030",
                img: "https://static.wixstatic.com/media/ea71bb_42a5209306dc4013beb8df622b43dc79~mv2_d_3613_4860_s_4_2.jpg/v1/fill/w_496,h_667,al_c,q_85,usm_0.66_1.00_0.01/ea71bb_42a5209306dc4013beb8df622b43dc79~mv2_d_3613_4860_s_4_2.webp",
                best_sellers: "false",
                category: "Leather Belts",
                size: "medium",
                title: 'If you are looking for a belt made out of high-quality leather and a strong silver buckle mechanism, this is your ideal pick. The texture and the elegant ...'
            },
            {
                id: "30",
                price: "50",
                desc: "Leather Belts 6",
                SKU: "0031",
                img: "https://static.wixstatic.com/media/ea71bb_e3dae48bc8784ca68b9e28fe33bb4b81~mv2_d_3613_4860_s_4_2.jpg/v1/fill/w_496,h_667,al_c,q_85,usm_0.66_1.00_0.01/ea71bb_e3dae48bc8784ca68b9e28fe33bb4b81~mv2_d_3613_4860_s_4_2.webp",
                best_sellers: "false",
                category: "Leather Belts",
                size: "medium",
                count: "1",
                title: 'If you are looking for a belt made out of high-quality leather and a strong silver buckle mechanism, this is your ideal pick. The texture and the elegant ...'
            },
            {
                id: "31",
                price: "50",
                count: "1",
                desc: "Leather Belts 7",
                SKU: "0032",
                img: "https://static.wixstatic.com/media/ea71bb_3437e280e9e44cd695d244df750f0222~mv2_d_3613_4860_s_4_2.jpg/v1/fill/w_496,h_667,al_c,q_85,usm_0.66_1.00_0.01/ea71bb_3437e280e9e44cd695d244df750f0222~mv2_d_3613_4860_s_4_2.webp",
                best_sellers: "false",
                category: "Leather Belts",
                size: "medium",
                title: 'If you are looking for a belt made out of high-quality leather and a strong silver buckle mechanism, this is your ideal pick. The texture and the elegant ...'
            },
            {
                id: "32",

                count: "1",
                price: "50",
                desc: "Leather Belts 8",
                SKU: "0033",
                img: "https://static.wixstatic.com/media/ea71bb_091e8f9d8d054e4982368e0f4f68cf0e~mv2_d_3613_4860_s_4_2.jpg/v1/fill/w_496,h_667,al_c,q_85,usm_0.66_1.00_0.01/ea71bb_091e8f9d8d054e4982368e0f4f68cf0e~mv2_d_3613_4860_s_4_2.webp",
                best_sellers: "false",
                category: "Leather Belts",
                size: "small", title: 'If you are looking for a belt made out of high-quality leather and a strong silver buckle mechanism, this is your ideal pick. The texture and the elegant ...'
            },
            {
                id: "33",
                price: "25",
                desc: "Phone Cases 1",
                SKU: "0034",
                count: "1",
                img: "https://static.wixstatic.com/media/ea71bb_fa86f061a1dd4d95b044551dcf0b352b~mv2_d_1576_2117_s_2.jpg/v1/fill/w_497,h_667,al_c,q_85,usm_0.66_1.00_0.01/ea71bb_fa86f061a1dd4d95b044551dcf0b352b~mv2_d_1576_2117_s_2.webp",
                best_sellers: "false",
                category: "Phone Cases",
                model: "iphone x",
                title: "Unique Describe designs on hard and soft cases and covers for iPhone"
            },
            {
                id: "34",
                price: "25",
                desc: "Phone Cases 2",
                SKU: "0035",
                count: "1",
                img: "https://static.wixstatic.com/media/ea71bb_73f718529ce14b1cba23d162711d2366~mv2_d_1576_2117_s_2.jpg/v1/fill/w_497,h_667,al_c,q_85,usm_0.66_1.00_0.01/ea71bb_73f718529ce14b1cba23d162711d2366~mv2_d_1576_2117_s_2.webp",
                best_sellers: "false",
                category: "Phone Cases",
                model: "iphone x",
                title: "Unique Describe designs on hard and soft cases and covers for iPhone"
            },
            {
                id: "35",
                price: "25",
                count: "1",
                desc: "Phone Cases 3",
                SKU: "0036",
                img: "https://static.wixstatic.com/media/ea71bb_1fa18fc78a924cf8a955a3c153bf5d74~mv2_d_1576_2117_s_2.jpg/v1/fill/w_497,h_667,al_c,q_85,usm_0.66_1.00_0.01/ea71bb_1fa18fc78a924cf8a955a3c153bf5d74~mv2_d_1576_2117_s_2.webp",
                best_sellers: "false",
                category: "Phone Cases",
                model: "iphone x",
                title: "Unique Describe designs on hard and soft cases and covers for iPhone"
            },
            {
                id: "36",
                count: "1",
                price: "25",
                desc: "Phone Cases 4",
                SKU: "0037",
                img: "https://static.wixstatic.com/media/ea71bb_d115c6a75bd74dca82a8e7145e44ed80~mv2_d_1576_2117_s_2.jpg/v1/fill/w_497,h_667,al_c,q_85,usm_0.66_1.00_0.01/ea71bb_d115c6a75bd74dca82a8e7145e44ed80~mv2_d_1576_2117_s_2.webp",
                best_sellers: "false",
                category: "Phone Cases",
                model: "iphone x",
                title: "Unique Describe designs on hard and soft cases and covers for iPhone"
            },
            {
                id: "37",
                price: "25",
                desc: "Phone Cases 5",
                SKU: "0038",
                count: "1",
                img: "https://static.wixstatic.com/media/ea71bb_d8c75e51bacc45418aac68ec7eb405fb~mv2_d_1576_2117_s_2.jpg/v1/fill/w_497,h_667,al_c,q_85,usm_0.66_1.00_0.01/ea71bb_d8c75e51bacc45418aac68ec7eb405fb~mv2_d_1576_2117_s_2.webp",
                best_sellers: "false",
                category: "Phone Cases",
                model: "iphone xs",
                title: "Unique Describe designs on hard and soft cases and covers for iPhone"
            },
            {
                id: "38",
                count: "1",
                price: "25",
                desc: "Phone Cases 6",
                SKU: "0039",
                img: "https://static.wixstatic.com/media/ea71bb_e05c89f9d76548d595ac28f440787b56~mv2_d_1576_2117_s_2.jpg/v1/fill/w_497,h_667,al_c,q_85,usm_0.66_1.00_0.01/ea71bb_e05c89f9d76548d595ac28f440787b56~mv2_d_1576_2117_s_2.webp",
                best_sellers: "false",
                category: "Phone Cases",
                model: "iphone xs",
                title: "Unique Describe designs on hard and soft cases and covers for iPhone"


            },
            {
                id: "39",
                count: "1",
                price: "25",
                desc: "Phone Cases 7",
                SKU: "0040",
                img: "https://static.wixstatic.com/media/ea71bb_cd91f4aa3bae42728b7ec25feee56f64~mv2_d_1576_2117_s_2.jpg/v1/fill/w_166,h_221,al_c,q_80,usm_0.66_1.00_0.01/ea71bb_cd91f4aa3bae42728b7ec25feee56f64~mv2_d_1576_2117_s_2.webp",
                best_sellers: "false",
                category: "Phone Cases",
                model: "iphone xs",
                title: "Unique Describe designs on hard and soft cases and covers for iPhone"

            },
            {
                id: "40",
                price: "25",
                desc: "Phone Cases 8",
                count: "1",
                SKU: "0041",
                img: "https://static.wixstatic.com/media/ea71bb_cf7229cdefac4f9ca2c59692ef3f5984~mv2_d_1576_2117_s_2.jpg/v1/fill/w_497,h_667,al_c,q_85,usm_0.66_1.00_0.01/ea71bb_cf7229cdefac4f9ca2c59692ef3f5984~mv2_d_1576_2117_s_2.webp",
                best_sellers: "false",
                category: "Phone Cases",
                model: "iphone xs",
                title: "Unique Describe designs on hard and soft cases and covers for iPhone"

            },








        ],




    )
    let [Cart, setCart] = useState([])
    var getLocalStorage = localStorage.getItem("Data");
    let AddCart = (id) => {


        const product = [...AllProduct]
        const check = Cart.every((product) => {
            return product.id !== id;
        })
        console.log(check)
        if (check) {
          
                 
            const data = product.filter(product => {
                return product.id === id
            }
            )

            setCart([...Cart, ...data])
            localStorage.setItem("Data" , JSON.stringify([...Cart , ...data]));

            console.log(Cart)

            
        }
        else {
            alert("the product has been added to cart")
            
           
        }


    }

const reductioon = (id) => 
    {
       
      Cart.forEach((item)=> 
      {
         if (item.id === id) {
           item.count > 1 ? item.count -=1    :  item.count = 1 ; 
         }
      }

      )
      setCart([...Cart])
      localStorage.setItem("Data" , JSON.stringify([...Cart]));

      
    };

    const increase  = (id) => 
    {
       
      Cart.forEach((item)=> 
      {
         if (item.id === id) {
              item.count++ ;
         }
      }

      )
      setCart([...Cart])
      localStorage.setItem("Data" , JSON.stringify([...Cart]));
    };

    if (getLocalStorage === null) {
       
        <>
           <h2 style={{testAlign : "center" , fontSize : "30px"}}> Cart Empty</h2>
        </>
      }
      else
      {
      Cart =  JSON.parse( localStorage.getItem("Data"));
      }
      
      const RemoveProduct = id => 
      {
      if (window.confirm("Do you want delete this product?")) {
        Cart.forEach((item , index) => {
          if (item.id === id ) {
            Cart.splice(index , 1)
            
          }
          
        })
        setCart([...Cart])
        localStorage.setItem("Data" , JSON.stringify([...Cart]));
    
      }
      }
      const [total, settotal] = useState(0)
      const getTotal  = () => 
      {
        const res = Cart.reduce((prev , item) => { 
        return prev +(item.price * item.count)
      },0)
      settotal(res)
      localStorage.setItem("Data" , JSON.stringify([...Cart] ,res));
      }
   




    return <DataContext.Provider value={{ AllProduct,getTotal  , total, RemoveProduct, reductioon  , getLocalStorage , setCart  , increase,  AddCart, Cart }}>
        {props.children} 
    </DataContext.Provider>

}


