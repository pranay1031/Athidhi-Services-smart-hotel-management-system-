import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    acl_ai_log_create: {
                        table: 'sys_security_acl'
                        id: '3c36adabd1ff4ef282011aee65e4e931'
                    }
                    acl_ai_log_delete: {
                        table: 'sys_security_acl'
                        id: 'f1330588b4c34ffdbf857827a88de88d'
                    }
                    acl_ai_log_read: {
                        table: 'sys_security_acl'
                        id: 'bdc1556e1f78494aab7a491ca6d60f50'
                    }
                    acl_ai_log_write: {
                        table: 'sys_security_acl'
                        id: '9dc22bce09ca4032852287ed9e98a606'
                    }
                    acl_amenity_create: {
                        table: 'sys_security_acl'
                        id: 'ea40dd00d8304832acefe3166b87c959'
                    }
                    acl_amenity_delete: {
                        table: 'sys_security_acl'
                        id: 'b0198b8b8c354eb28f507e8204bf781b'
                    }
                    acl_amenity_read: {
                        table: 'sys_security_acl'
                        id: '98adc9bc1b244bc4b1e1e005d192257d'
                    }
                    acl_amenity_write: {
                        table: 'sys_security_acl'
                        id: 'e8b5c3592f3d4bc19d55220b11ebc87e'
                    }
                    acl_cat_item_create: {
                        table: 'sys_security_acl'
                        id: '04945a2703e047a3af6eb32947439c76'
                    }
                    acl_cat_item_delete: {
                        table: 'sys_security_acl'
                        id: '125901a8a1004a6c8f617ab1d9131f2a'
                    }
                    acl_cat_item_read_guest: {
                        table: 'sys_security_acl'
                        id: '4fa92781ff1b4a1aad2749f3c2a2b5d7'
                    }
                    acl_cat_item_read_staff: {
                        table: 'sys_security_acl'
                        id: '78b24b1238da4b4c8c6a11617bb92b14'
                    }
                    acl_cat_item_write: {
                        table: 'sys_security_acl'
                        id: '3cceb82569b44319ab71423345b72806'
                    }
                    acl_dept_create: {
                        table: 'sys_security_acl'
                        id: 'a23aecc072a14ce2826c346c87283316'
                    }
                    acl_dept_delete: {
                        table: 'sys_security_acl'
                        id: 'c2adf0c3035d4464ac11a09bb2d7a38b'
                    }
                    acl_dept_read: {
                        table: 'sys_security_acl'
                        id: 'abf52eba48394e57bfc451c7fe577675'
                    }
                    acl_dept_write: {
                        table: 'sys_security_acl'
                        id: '89362f28780b4cb7aaafd8f339af6ab3'
                    }
                    acl_food_order_create_guest: {
                        table: 'sys_security_acl'
                        id: 'a71479a5a9f74e8093b04b2a8eb6a3c1'
                    }
                    acl_food_order_create_staff: {
                        table: 'sys_security_acl'
                        id: 'da44235fbac4497884218531468b496e'
                    }
                    acl_food_order_delete: {
                        table: 'sys_security_acl'
                        id: '718e0b6d9dbc45c0bc99fdca55ab12fc'
                    }
                    acl_food_order_item_create_guest: {
                        table: 'sys_security_acl'
                        id: 'e5166868eade4c5baaf75f04a2c7e96b'
                    }
                    acl_food_order_item_create_staff: {
                        table: 'sys_security_acl'
                        id: '0b0961efc1714b33a24c19745cea88f3'
                    }
                    acl_food_order_item_delete: {
                        table: 'sys_security_acl'
                        id: '33770d0ccb03489596b92bfca053d8df'
                    }
                    acl_food_order_item_read_guest: {
                        table: 'sys_security_acl'
                        id: 'b82ced06467c407ab294019d282c7a54'
                    }
                    acl_food_order_item_read_staff: {
                        table: 'sys_security_acl'
                        id: '75fc729ec3fe49be906bacbd7965915e'
                    }
                    acl_food_order_item_write: {
                        table: 'sys_security_acl'
                        id: '781623196c144090aa4acb6ad8bad8f3'
                    }
                    acl_food_order_read_guest: {
                        table: 'sys_security_acl'
                        id: 'ffa221d75f564f8d9f0fabe8f8164887'
                    }
                    acl_food_order_read_staff: {
                        table: 'sys_security_acl'
                        id: '21f02e1265084acba8a231b1153d60c4'
                    }
                    acl_food_order_write_guest: {
                        table: 'sys_security_acl'
                        id: 'b01deb7b8ee94b0e8459240dfa0d7881'
                    }
                    acl_food_order_write_staff: {
                        table: 'sys_security_acl'
                        id: '9b0e2c64920e4a9999336b1f814b982f'
                    }
                    acl_guest_create_self: {
                        table: 'sys_security_acl'
                        id: '9c2d7c511852420fba2aed5622693931'
                    }
                    acl_guest_create_staff: {
                        table: 'sys_security_acl'
                        id: '3b63f635228c4259b7ac86f1faf39bfe'
                    }
                    acl_guest_delete: {
                        table: 'sys_security_acl'
                        id: 'ed3ca82ec2404c57a1691b928c4dca48'
                    }
                    acl_guest_pref_create_self: {
                        table: 'sys_security_acl'
                        id: '4af357d8f5b94a2baaecdecf8f24003f'
                    }
                    acl_guest_pref_create_staff: {
                        table: 'sys_security_acl'
                        id: 'baa1409b34454e8d93e7b93b0c4cba48'
                    }
                    acl_guest_pref_delete: {
                        table: 'sys_security_acl'
                        id: '50e34967cef84b2daa571097a9999d3d'
                    }
                    acl_guest_pref_read_self: {
                        table: 'sys_security_acl'
                        id: '8baa71144e21493da6307acd80619259'
                    }
                    acl_guest_pref_read_staff: {
                        table: 'sys_security_acl'
                        id: 'a306555f0c0c4591a76f21a00a6f6304'
                    }
                    acl_guest_pref_write_self: {
                        table: 'sys_security_acl'
                        id: '360426ce03cc48c7837e0a218ef599fd'
                    }
                    acl_guest_pref_write_staff: {
                        table: 'sys_security_acl'
                        id: '6febd0dd78b84bc9a86cb405a9ad6607'
                    }
                    acl_guest_read_self: {
                        table: 'sys_security_acl'
                        id: '6a8c9187cf184c90be851afec19631f9'
                    }
                    acl_guest_read_staff: {
                        table: 'sys_security_acl'
                        id: '9bcf835595d84307b7b0b224c12aed03'
                    }
                    acl_guest_write_self: {
                        table: 'sys_security_acl'
                        id: '5bb34456766f4dbb827119d09a11f538'
                    }
                    acl_guest_write_staff: {
                        table: 'sys_security_acl'
                        id: '5047336c60e84c109135300286702781'
                    }
                    acl_hk_task_create: {
                        table: 'sys_security_acl'
                        id: 'f4c728038dfb46368c1bf4ccc26772ae'
                    }
                    acl_hk_task_delete: {
                        table: 'sys_security_acl'
                        id: '50e65ae74321493499f4cbed47ad13b5'
                    }
                    acl_hk_task_read: {
                        table: 'sys_security_acl'
                        id: '346e645b5ba241aa8a0e4e347d73580b'
                    }
                    acl_hk_task_write: {
                        table: 'sys_security_acl'
                        id: '1e8acc49ba7f4400b07b9883cc5636ca'
                    }
                    acl_inc_create: {
                        table: 'sys_security_acl'
                        id: '65a51030a5ec417b8945d7ff46e34580'
                    }
                    acl_inc_delete: {
                        table: 'sys_security_acl'
                        id: '0377b79ce54741109fa53c795328fae3'
                    }
                    acl_inc_read: {
                        table: 'sys_security_acl'
                        id: '9f0fca3f21484ded8d59597432482f78'
                    }
                    acl_inc_write: {
                        table: 'sys_security_acl'
                        id: 'f0754fa3eac445e2b0f0a84e7bdebef3'
                    }
                    acl_inv_item_create: {
                        table: 'sys_security_acl'
                        id: '4edbf697f7cf432dbf3d2af8fce86c67'
                    }
                    acl_inv_item_delete: {
                        table: 'sys_security_acl'
                        id: '5351c0f20e4f4090ad763f1a9b94d51c'
                    }
                    acl_inv_item_read: {
                        table: 'sys_security_acl'
                        id: '0e902bab72f64214b39792b73d9d6c5b'
                    }
                    acl_inv_item_write: {
                        table: 'sys_security_acl'
                        id: 'dd3e084692d5467e87d2262f0ac676d8'
                    }
                    acl_inv_reorder_create: {
                        table: 'sys_security_acl'
                        id: '802f0d4f43ce4d7cb1fba608c98ab3e8'
                    }
                    acl_inv_reorder_delete: {
                        table: 'sys_security_acl'
                        id: '9fea4f69a56d49e294c4bf7ab4aecd47'
                    }
                    acl_inv_reorder_read: {
                        table: 'sys_security_acl'
                        id: 'e59765aac1f7490db19402f680d5928d'
                    }
                    acl_inv_reorder_write: {
                        table: 'sys_security_acl'
                        id: '080ef90c9e04455e8c42500356f14bb9'
                    }
                    acl_inv_tx_create: {
                        table: 'sys_security_acl'
                        id: 'bed0bf7989584481a9b1467a8f9bcd6b'
                    }
                    acl_inv_tx_delete: {
                        table: 'sys_security_acl'
                        id: '868de81b3f17463f99253131c8de2bce'
                    }
                    acl_inv_tx_read: {
                        table: 'sys_security_acl'
                        id: '7269ba59ec134588aa0762faa3d081a9'
                    }
                    acl_inv_tx_write: {
                        table: 'sys_security_acl'
                        id: 'cd674332b9fe46cda4681c141bf888c6'
                    }
                    acl_menu_create: {
                        table: 'sys_security_acl'
                        id: 'f6716048cfd444c4b696a8a0853ff663'
                    }
                    acl_menu_create_write: {
                        table: 'sys_security_acl'
                        id: '69b59c366920461e885266245f28b8ef'
                    }
                    acl_menu_delete: {
                        table: 'sys_security_acl'
                        id: '0eb4b258ad5d486f8d9b3fb369a15762'
                    }
                    acl_menu_item_create: {
                        table: 'sys_security_acl'
                        id: '3b52f6fa4021465ca9c09b905006c22b'
                    }
                    acl_menu_item_delete: {
                        table: 'sys_security_acl'
                        id: '5351073f028c4bcaa249b928c271cc0a'
                    }
                    acl_menu_item_read_guest: {
                        table: 'sys_security_acl'
                        id: '2c6e47a71b3e493c9026c6c4755bf1f9'
                    }
                    acl_menu_item_read_staff: {
                        table: 'sys_security_acl'
                        id: '1e525e09ab9942ec84acc9c1e6c7eb80'
                    }
                    acl_menu_item_write: {
                        table: 'sys_security_acl'
                        id: 'ecd1a44e7ff1491f87d38c0138670b4e'
                    }
                    acl_menu_read_guest: {
                        table: 'sys_security_acl'
                        id: '3b76bc85ada845d28eb33d5e267fc0b2'
                    }
                    acl_menu_read_staff: {
                        table: 'sys_security_acl'
                        id: '89302a9c479b4cfdbf5ef4ccb17ff38e'
                    }
                    acl_mnt_create: {
                        table: 'sys_security_acl'
                        id: '609eb0610d104566b7cce4cb86e93d1b'
                    }
                    acl_mnt_delete: {
                        table: 'sys_security_acl'
                        id: '0f5f068cd6f948e3804390ab48126c9a'
                    }
                    acl_mnt_read: {
                        table: 'sys_security_acl'
                        id: 'ff4d6d536ed14135ae4cb6398f31bd27'
                    }
                    acl_mnt_write: {
                        table: 'sys_security_acl'
                        id: '9ed84c72827e4148a2a00ff7c74ff1f1'
                    }
                    acl_pay_create_guest: {
                        table: 'sys_security_acl'
                        id: '078d316b4c4548d399dcf8a2ab9ccfaf'
                    }
                    acl_pay_create_staff: {
                        table: 'sys_security_acl'
                        id: '40956c897f3e4f44863dad8bc11d562c'
                    }
                    acl_pay_delete: {
                        table: 'sys_security_acl'
                        id: '9df0f6fda67542c79e03825465571f8b'
                    }
                    acl_pay_read_guest: {
                        table: 'sys_security_acl'
                        id: '340311a533aa45b093c233d7d41c1bf2'
                    }
                    acl_pay_read_staff: {
                        table: 'sys_security_acl'
                        id: '143a3d7d831b4b85b200d24da6f31cb5'
                    }
                    acl_pay_write_staff: {
                        table: 'sys_security_acl'
                        id: '4edb313bed594c37961589cc3f349010'
                    }
                    acl_res_create_guest: {
                        table: 'sys_security_acl'
                        id: 'da015fcfc3b34163b569042329b63b80'
                    }
                    acl_res_create_staff: {
                        table: 'sys_security_acl'
                        id: '8952653b1f4844f88f004efb214c0a53'
                    }
                    acl_res_delete: {
                        table: 'sys_security_acl'
                        id: '077776d5d7b84af0bf01347ad64e803e'
                    }
                    acl_res_read_guest: {
                        table: 'sys_security_acl'
                        id: '77be7c08b2bb480b8df23726ba2993cf'
                    }
                    acl_res_read_staff: {
                        table: 'sys_security_acl'
                        id: 'df4a5c6bc84641ec9e0f122dcbb9a52a'
                    }
                    acl_res_write_guest: {
                        table: 'sys_security_acl'
                        id: 'f502dd7404af4e419ca7b5e8e77d0ca4'
                    }
                    acl_res_write_staff: {
                        table: 'sys_security_acl'
                        id: '36ccf90d87a844ef90b2966b93f1da4a'
                    }
                    acl_restaurant_create: {
                        table: 'sys_security_acl'
                        id: '960d66e268344875be8074167c2cbc77'
                    }
                    acl_restaurant_delete: {
                        table: 'sys_security_acl'
                        id: '10217a5bf82d40c69f9ea0ee1b0fb40b'
                    }
                    acl_restaurant_read_guest: {
                        table: 'sys_security_acl'
                        id: '3baeee9fa2834e5d87b0e4f8b744971b'
                    }
                    acl_restaurant_read_staff: {
                        table: 'sys_security_acl'
                        id: '787aa58f789a412ca81e624277ad99f3'
                    }
                    acl_restaurant_write: {
                        table: 'sys_security_acl'
                        id: '81137e087625493f8a3c521fe8dc1fcb'
                    }
                    acl_room_amenity_create: {
                        table: 'sys_security_acl'
                        id: '6eda963ae99648949767e148c7cd0c50'
                    }
                    acl_room_amenity_delete: {
                        table: 'sys_security_acl'
                        id: '348788822a794d82b190d9432e0336e6'
                    }
                    acl_room_amenity_read: {
                        table: 'sys_security_acl'
                        id: '31f27f36e7f344eb9d23558e3250c542'
                    }
                    acl_room_amenity_write: {
                        table: 'sys_security_acl'
                        id: '19ce062239c44478913a025bed18236f'
                    }
                    acl_room_create: {
                        table: 'sys_security_acl'
                        id: 'ad067c0fd2204a76b8b06ad652fba0dd'
                    }
                    acl_room_delete: {
                        table: 'sys_security_acl'
                        id: 'a18a740d339b446f996a584ea7ce3e38'
                    }
                    acl_room_read: {
                        table: 'sys_security_acl'
                        id: '43b91e08d376461db98b6eab6a2c550f'
                    }
                    acl_room_type_create: {
                        table: 'sys_security_acl'
                        id: 'b0c9007301db4316b8270951076ba88f'
                    }
                    acl_room_type_delete: {
                        table: 'sys_security_acl'
                        id: 'b9fdf85e9d7c4d939089ecc812c8d110'
                    }
                    acl_room_type_read: {
                        table: 'sys_security_acl'
                        id: '3fd23b86394846eda188461010faa27f'
                    }
                    acl_room_type_write: {
                        table: 'sys_security_acl'
                        id: 'cf69463db4bf4380924bd2c0fddc447b'
                    }
                    acl_room_write: {
                        table: 'sys_security_acl'
                        id: 'f76b832f789a4de5a9d5548b5bd85294'
                    }
                    acl_srv_create_guest: {
                        table: 'sys_security_acl'
                        id: '7ee86eb279eb4c58b44c9f3796cef921'
                    }
                    acl_srv_create_staff: {
                        table: 'sys_security_acl'
                        id: '3ecb327fa8f448beb7f09e55832943a0'
                    }
                    acl_srv_delete: {
                        table: 'sys_security_acl'
                        id: 'a6d4e9871646453c9ce294d090e723df'
                    }
                    acl_srv_item_create_guest: {
                        table: 'sys_security_acl'
                        id: 'b404e16cd87f4ccaa1ad001e11f35d83'
                    }
                    acl_srv_item_create_staff: {
                        table: 'sys_security_acl'
                        id: 'ad79ea4212734c0386aa6c748af7f923'
                    }
                    acl_srv_item_delete: {
                        table: 'sys_security_acl'
                        id: '0884bac06245425bb31be27443bbfad6'
                    }
                    acl_srv_item_read_guest: {
                        table: 'sys_security_acl'
                        id: 'e5f0e99503b341e8b74889135ffe4414'
                    }
                    acl_srv_item_read_staff: {
                        table: 'sys_security_acl'
                        id: '625bfd1547b44ba6a011585fc8cc2d5a'
                    }
                    acl_srv_item_write: {
                        table: 'sys_security_acl'
                        id: 'de8322dfd365426d81aa0ce1e23a53a9'
                    }
                    acl_srv_read_guest: {
                        table: 'sys_security_acl'
                        id: '472d3a4f39cf495f8ab22691d314472c'
                    }
                    acl_srv_read_staff: {
                        table: 'sys_security_acl'
                        id: 'ce0d69e096c44fada29623828427b611'
                    }
                    acl_srv_write_guest: {
                        table: 'sys_security_acl'
                        id: '6f6b6638745d42828a7cd1f9c29d187d'
                    }
                    acl_srv_write_staff: {
                        table: 'sys_security_acl'
                        id: 'b58ecb147c364ccbbab54329ab0eb127'
                    }
                    acl_staff_create: {
                        table: 'sys_security_acl'
                        id: 'c17ca1ad2d134b20b89e468a7051e620'
                    }
                    acl_staff_delete: {
                        table: 'sys_security_acl'
                        id: '442f187c3557410c86acc44001111bbd'
                    }
                    acl_staff_read_manager: {
                        table: 'sys_security_acl'
                        id: '081ae3f296fa4f3d98ec0ae57e1f1f90'
                    }
                    acl_staff_read_self: {
                        table: 'sys_security_acl'
                        id: 'ebfa9d8ac35c4c00afa988762453dc36'
                    }
                    acl_staff_write: {
                        table: 'sys_security_acl'
                        id: '1d20953c74b94a5cb3927f1f34eefe7e'
                    }
                    acl_stay_create: {
                        table: 'sys_security_acl'
                        id: '6be7359e260c4e57b10838b980bed11a'
                    }
                    acl_stay_delete: {
                        table: 'sys_security_acl'
                        id: '8587fc161b4441f1994af14142c7f923'
                    }
                    acl_stay_read_guest: {
                        table: 'sys_security_acl'
                        id: 'b3224b2146fa490282498a9297d9593a'
                    }
                    acl_stay_read_staff: {
                        table: 'sys_security_acl'
                        id: 'fe596eb42378451484cc9491ed74100a'
                    }
                    acl_stay_write: {
                        table: 'sys_security_acl'
                        id: '641e9ef191d54025b868632bb4a58198'
                    }
                    acl_work_task_create: {
                        table: 'sys_security_acl'
                        id: '29522196288346fa8daed8d46faddaa6'
                    }
                    acl_work_task_delete: {
                        table: 'sys_security_acl'
                        id: 'bb8e8b01663d405893285ed33969b022'
                    }
                    acl_work_task_read: {
                        table: 'sys_security_acl'
                        id: 'e387c99b072d4688a6a635b2d8f306d7'
                    }
                    acl_work_task_write: {
                        table: 'sys_security_acl'
                        id: '98e0dfa8781a459f95882265bf684ec4'
                    }
                    app_menu_athidhi: {
                        table: 'sys_app_application'
                        id: '72c30bc9f7f44723855cf02efbc4de34'
                    }
                    bom_json: {
                        table: 'sys_module'
                        id: '2a7e1488182246a28bf491ed93472661'
                    }
                    br_checkin_reservation: {
                        table: 'sys_script'
                        id: 'ff9ebc89114343f9961dfd2cd3bc42ee'
                    }
                    br_checkout_stay: {
                        table: 'sys_script'
                        id: '75832f023a864f5aa73551c07b9406d9'
                    }
                    br_housekeeping_completion: {
                        table: 'sys_script'
                        id: 'f6429127733a44a68bde42abaebec57b'
                    }
                    br_incident_escalation: {
                        table: 'sys_script'
                        id: '8fbc835b272f4f2494036736a9842dac'
                    }
                    br_inventory_reorder_receiving: {
                        table: 'sys_script'
                        id: '851d9758ad884f38987fe1ce2e408a24'
                    }
                    br_inventory_stock_control: {
                        table: 'sys_script'
                        id: '3043f9b10615413fb95e4ac65b7f6e34'
                    }
                    br_low_stock_detection: {
                        table: 'sys_script'
                        id: '4f21f93b284b4fdc9164c79aaceb3d0e'
                    }
                    br_maintenance_resolution: {
                        table: 'sys_script'
                        id: '3422f41f15bd44f2b3b50dc6089ae7dd'
                    }
                    br_process_food_order_item: {
                        table: 'sys_script'
                        id: '731ab2c1626443719e3b738c99dbf2b9'
                    }
                    br_rollup_food_order_total: {
                        table: 'sys_script'
                        id: '17a5912d055b45b1a52c9607ac10e174'
                    }
                    br_room_service_dispatch: {
                        table: 'sys_script'
                        id: '946b4af0da1245a08c1df0331c17e8fc'
                    }
                    br_service_catalog_request: {
                        table: 'sys_script'
                        id: 'c8645e300a444feea72ddc1c2d0c7b4f'
                    }
                    br_service_request_intake: {
                        table: 'sys_script'
                        id: 'c32f6c02c43040179ff8e3280fabeff6'
                    }
                    br_service_request_item_pricing: {
                        table: 'sys_script'
                        id: '4c597ce23dfd4b4289faa1c7bc1b9c37'
                    }
                    br_validate_food_order: {
                        table: 'sys_script'
                        id: '3d7acc6be11d4263968ee3dfe515efc3'
                    }
                    br_validate_reservation: {
                        table: 'sys_script'
                        id: 'd5ed3d52356c422a8a1f6ffa9f7eee6c'
                    }
                    br0: {
                        table: 'sys_script'
                        id: '2a1a7987dfdf449c8746b19baa148e6f'
                        deleted: true
                    }
                    cs0: {
                        table: 'sys_script_client'
                        id: '05e4e42c3211423b9731a5d16e4d4663'
                        deleted: true
                    }
                    mod_admin_config: {
                        table: 'sys_app_module'
                        id: '9d5c35e5836444a5b5c95b5145aac1b5'
                    }
                    mod_admin_departments: {
                        table: 'sys_app_module'
                        id: '5b30aec2b76741f6a4c1c5ef8fd163b8'
                    }
                    mod_admin_staff: {
                        table: 'sys_app_module'
                        id: 'c0c8e68abb0841d393a0087f8e1241ff'
                    }
                    mod_ai_audit_logs: {
                        table: 'sys_app_module'
                        id: '7d6c92425357406cac8a483e88a120bb'
                    }
                    mod_fd_checkin_checkout: {
                        table: 'sys_app_module'
                        id: 'd187a3edf0fc4ffbb19067405fc7a740'
                    }
                    mod_fd_dashboard: {
                        table: 'sys_app_module'
                        id: '7f7cda22982646be8c2362298c7acaff'
                    }
                    mod_fd_guests: {
                        table: 'sys_app_module'
                        id: 'cc58013803cb4c72bc1db95ca9faab17'
                    }
                    mod_fd_incidents: {
                        table: 'sys_app_module'
                        id: '83fc957de533483ab411126c72921765'
                    }
                    mod_fd_payments: {
                        table: 'sys_app_module'
                        id: 'b21cd4c56c9643559c687cf8f43d7d43'
                    }
                    mod_fd_reservations: {
                        table: 'sys_app_module'
                        id: 'c8caf2ed4bac4c8bba3c5c354658052a'
                    }
                    mod_fd_service_requests: {
                        table: 'sys_app_module'
                        id: 'e9a02b8135d04ee89705821ee95b81d3'
                    }
                    mod_fd_stays: {
                        table: 'sys_app_module'
                        id: '4575cb98a3d040339e574579f1bb4395'
                    }
                    mod_fd_workspace_page: {
                        table: 'sys_app_module'
                        id: '9fc4485da08c491d936e6120b5c16934'
                    }
                    mod_fnb_food_order_items: {
                        table: 'sys_app_module'
                        id: 'abaf784f926f4c76bc3b0376bcd7e4b0'
                    }
                    mod_fnb_food_orders: {
                        table: 'sys_app_module'
                        id: '660a4058082149cb9cfa4d10d3988a17'
                    }
                    mod_fnb_kitchen_orders: {
                        table: 'sys_app_module'
                        id: 'fc80b29d395c45baa207052b41393be8'
                    }
                    mod_fnb_menu_items: {
                        table: 'sys_app_module'
                        id: '70d63272539f4ae399dae90e8fb13474'
                    }
                    mod_fnb_menus: {
                        table: 'sys_app_module'
                        id: 'c45c05e5444946eb9ebf4adf1f18b901'
                    }
                    mod_fnb_restaurants: {
                        table: 'sys_app_module'
                        id: '448a2edfae454c83955b5f3f6c78259b'
                    }
                    mod_gs_catalog: {
                        table: 'sys_app_module'
                        id: 'aac2656580854313b264edf6d8f41bfb'
                    }
                    mod_gs_request_items: {
                        table: 'sys_app_module'
                        id: '11e72a48466746daa4d785418f387e68'
                    }
                    mod_gs_requests: {
                        table: 'sys_app_module'
                        id: 'cfe77b86b31644a8b490319cdba579d0'
                    }
                    mod_guest_active_stay: {
                        table: 'sys_app_module'
                        id: 'f3b6c1ee61ea45e2bd45e7fd32e62e08'
                    }
                    mod_guest_dining: {
                        table: 'sys_app_module'
                        id: '1fee86116833430a98ec1c8ff7702f62'
                    }
                    mod_guest_food_orders: {
                        table: 'sys_app_module'
                        id: '86ac2124faca44bca584beb78d2b1f84'
                    }
                    mod_guest_payments: {
                        table: 'sys_app_module'
                        id: '9305cf7635fc43d39faa64fa28e8665b'
                    }
                    mod_guest_portal_hub: {
                        table: 'sys_app_module'
                        id: 'ac55da414c934f4ab0c6fee07fb4318e'
                    }
                    mod_guest_reservations: {
                        table: 'sys_app_module'
                        id: '2592570f14d34a0081f107137f771932'
                    }
                    mod_guest_service_catalog: {
                        table: 'sys_app_module'
                        id: '0d835ac314cc4a609ab5a5c7548498ef'
                    }
                    mod_guest_service_requests: {
                        table: 'sys_app_module'
                        id: 'cf4bc0fc314e4d06801bc46618086810'
                    }
                    mod_hk_room_board: {
                        table: 'sys_app_module'
                        id: '357d4e0171054d688e02813e38c307c1'
                    }
                    mod_housekeeping_tasks: {
                        table: 'sys_app_module'
                        id: '062cbeb615054fa99b5b2a0e0b68c727'
                    }
                    mod_inv_items: {
                        table: 'sys_app_module'
                        id: 'c8f928bb6b5b4a7da9ebca1a5b9f103f'
                    }
                    mod_inv_low_stock: {
                        table: 'sys_app_module'
                        id: '8821455acaa04926b85de248e59dd64e'
                    }
                    mod_inv_reorders: {
                        table: 'sys_app_module'
                        id: '9be0135b4f8c438a8d1521de1040588e'
                    }
                    mod_inv_transactions: {
                        table: 'sys_app_module'
                        id: '8e686f57064c4d148f90ed27e775b149'
                    }
                    mod_kitchen_kds: {
                        table: 'sys_app_module'
                        id: '21cbfaede76e4e229421ce6d3019223f'
                    }
                    mod_maint_requests: {
                        table: 'sys_app_module'
                        id: '2bd8815c494e46d38449882851b5146f'
                    }
                    mod_maint_tasks: {
                        table: 'sys_app_module'
                        id: '8b4d28da8ede4bb9b47312f1f7427ea8'
                    }
                    mod_mgr_command_center: {
                        table: 'sys_app_module'
                        id: 'c5c7a8c967744f49b8252641c2983e5c'
                    }
                    mod_mgr_dashboard: {
                        table: 'sys_app_module'
                        id: '14bbd6927a8345ce85573792c081e76b'
                    }
                    mod_mgr_open_incidents: {
                        table: 'sys_app_module'
                        id: '1aef18b286694933bf29437a86b775a5'
                    }
                    mod_mgr_pending_ops: {
                        table: 'sys_app_module'
                        id: '292fe9c00d8a420494fb30fd4749e770'
                    }
                    mod_room_availability: {
                        table: 'sys_app_module'
                        id: '9ef09611cc2d4072874693a3043308dc'
                    }
                    mod_room_types: {
                        table: 'sys_app_module'
                        id: '12d8887fcfa64b758f431bceffe180ea'
                    }
                    mod_rooms_list: {
                        table: 'sys_app_module'
                        id: '0beb39546de2430bbaae9927999f1473'
                    }
                    mod_sep_admin: {
                        table: 'sys_app_module'
                        id: '1e78f0ab201f46468ff97012a6f8a295'
                    }
                    mod_sep_fnb: {
                        table: 'sys_app_module'
                        id: '29ad035ea2cd4c629258a0a1dc9f3eea'
                    }
                    mod_sep_front_desk: {
                        table: 'sys_app_module'
                        id: 'a85d3eebee704e998c7c662d7fbf5347'
                    }
                    mod_sep_guest: {
                        table: 'sys_app_module'
                        id: '83f83d90dd0f42d3a916ae40f47ec63e'
                    }
                    mod_sep_guest_services: {
                        table: 'sys_app_module'
                        id: '305f14d2b27048578a37b6ba342f8476'
                    }
                    mod_sep_inventory: {
                        table: 'sys_app_module'
                        id: '3846eaa9961c4653be9bf8a2b80bf90d'
                    }
                    mod_sep_maintenance: {
                        table: 'sys_app_module'
                        id: '469ac6f3cf074fbb8b1c611ebb41b7ac'
                    }
                    mod_sep_management: {
                        table: 'sys_app_module'
                        id: '5191626a3ac7404d8cd50888c0b84f14'
                    }
                    mod_sep_rooms_housekeeping: {
                        table: 'sys_app_module'
                        id: '4a27e63d6c3248de9824bf6c601b77ab'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '603423a190c34cb491fb7ba85cdbce1c'
                    }
                    prop_ai_audit_enabled: {
                        table: 'sys_properties'
                        id: '7beaffcbaf5a4ad393aff3df3f34235f'
                    }
                    prop_ai_provider: {
                        table: 'sys_properties'
                        id: '420d8d7ba35e44e2a725a85ad14fd7fd'
                    }
                    prop_brand: {
                        table: 'sys_properties'
                        id: '06745dfa2e9743bcb2067418834649f2'
                    }
                    prop_environment: {
                        table: 'sys_properties'
                        id: 'e13247161a4a4557935a0b5166648dd9'
                    }
                    prop_gemini_api_key: {
                        table: 'sys_properties'
                        id: 'a9aef12713a640c8b405b0763e69be12'
                    }
                    prop_gemini_endpoint: {
                        table: 'sys_properties'
                        id: '7b5b0d60ee684bf2bd9b0275255e348c'
                    }
                    prop_gemini_model: {
                        table: 'sys_properties'
                        id: '3dd598c6d41d429e875cb7ac2f772ec2'
                    }
                    prop_gemini_timeout: {
                        table: 'sys_properties'
                        id: '5f60b30bdcb346ab950266412f1a23fd'
                    }
                    prop_hotel_name: {
                        table: 'sys_properties'
                        id: '66736da279d343dabe8c2718b3c39cc4'
                    }
                    rest_gemini_api: {
                        table: 'sys_rest_message'
                        id: '4e4dd79eb73d4bffacd55cd2ab7dbee1'
                    }
                    rm_fn_hdr_api_key: {
                        table: 'sys_rest_message_fn_headers'
                        id: '7b20492cda12480bb18374d9e0345678'
                    }
                    rm_fn_hdr_content_type: {
                        table: 'sys_rest_message_fn_headers'
                        id: '2ad457492ad24afabeedd3b66d5a6ebe'
                    }
                    rm_fn_param_key: {
                        table: 'sys_rest_message_fn_param_defs'
                        id: 'aeb48ce452914be49e955f38c724e80d'
                        deleted: true
                    }
                    rm_hdr_content_type: {
                        table: 'sys_rest_message_headers'
                        id: 'a2315feb9ea845bfb23b8530d5537ec3'
                    }
                    src_server_ai_action_handlers_ts: {
                        table: 'sys_module'
                        id: '90af5af3ecba4c7c9b888203785e4601'
                    }
                    src_server_ai_action_registry_ts: {
                        table: 'sys_module'
                        id: '8c362478143d4d848e65999d800fd05e'
                    }
                    src_server_ai_ai_gateway_ts: {
                        table: 'sys_module'
                        id: 'd78c405177954da58ca8f3472dc21e59'
                    }
                    src_server_ai_gemini_service_ts: {
                        table: 'sys_module'
                        id: '083dc5ec633741ac93afed50acca5938'
                    }
                    src_server_ai_tests_ai_security_tests_ts: {
                        table: 'sys_module'
                        id: '0a76ae36c344431ea9efe23bbe2e2d8d'
                    }
                    src_server_ai_types_ts: {
                        table: 'sys_module'
                        id: '0c704df7f88b43c0ab13155168f450cf'
                    }
                    'src_server_business-rules_fnb_inventory_ts': {
                        table: 'sys_module'
                        id: 'c580835a37d9414a82a205eb6f368dd5'
                    }
                    'src_server_business-rules_operations_ts': {
                        table: 'sys_module'
                        id: 'b9b1b9537b164f22b57486d7c8affcee'
                    }
                    src_server_logger_ts: {
                        table: 'sys_module'
                        id: 'c744383895114b26823aec5c95907b2d'
                    }
                    src_server_operations_kpi_summary_ts: {
                        table: 'sys_module'
                        id: '9cbc4e5b14ba4f57b0e6403c059608cb'
                    }
                    src_server_script_ts: {
                        table: 'sys_module'
                        id: 'eb7462528de74158990aa407e130c90a'
                        deleted: true
                    }
                    test_rest_msg: {
                        table: 'sys_rest_message'
                        id: '0cfc21ef8a664f2f9f1fd001c17f6299'
                        deleted: true
                    }
                    ui_act_check_in: {
                        table: 'sys_ui_action'
                        id: '2e93ed3246734acf93813f2427a9b462'
                    }
                    ui_act_check_out: {
                        table: 'sys_ui_action'
                        id: '07448868eba9489cac5ded657bc79265'
                    }
                    ui_act_food_accept: {
                        table: 'sys_ui_action'
                        id: 'a18b0f47a93043a2af26fcd7fc9bf742'
                    }
                    ui_act_food_cancel: {
                        table: 'sys_ui_action'
                        id: '3200c3186dbd4bf2b7957f2431398b84'
                    }
                    ui_act_food_delivered: {
                        table: 'sys_ui_action'
                        id: 'e8a1b5c2d2484be1a65c82738f653115'
                    }
                    ui_act_food_out_delivery: {
                        table: 'sys_ui_action'
                        id: 'b744cac0b9da42d7803a69b97eb368f9'
                    }
                    ui_act_food_prepare: {
                        table: 'sys_ui_action'
                        id: '591e5f4dcbdb4cabb4323631fed8f9a9'
                    }
                    ui_act_food_ready: {
                        table: 'sys_ui_action'
                        id: '920c7b105c26460d8f97c4d294122477'
                    }
                    ui_act_hk_complete: {
                        table: 'sys_ui_action'
                        id: '7a80e24564004431bcecfb96c348e22f'
                    }
                    ui_act_hk_fail_inspect: {
                        table: 'sys_ui_action'
                        id: '8260643261ba45c8a0a645a06b7b2400'
                    }
                    ui_act_hk_pass_inspect: {
                        table: 'sys_ui_action'
                        id: '8765fdf58afd4e07b0a75b90d3c5dabb'
                    }
                    ui_act_hk_start: {
                        table: 'sys_ui_action'
                        id: '598cfda54d3f47d199355e2dc1dae114'
                    }
                    ui_act_mnt_resolve: {
                        table: 'sys_ui_action'
                        id: 'c54163a3014147fb9843d46f01ddbdce'
                    }
                    ui_act_mnt_start: {
                        table: 'sys_ui_action'
                        id: '33b5c60faf4d481686046d1f8f2e771a'
                    }
                    ui_act_srv_accept: {
                        table: 'sys_ui_action'
                        id: '1d2f24ed96fc49f181f74e1365382666'
                    }
                    ui_act_srv_complete: {
                        table: 'sys_ui_action'
                        id: '755fb1e0d15b4ef6b4606dcded64be19'
                    }
                    ui_action_test: {
                        table: 'sys_ui_action'
                        id: '925f3c82253c4bc5ad1a77fa2e8252ad'
                        deleted: true
                    }
                }
                composite: [
                    {
                        table: 'sys_db_object'
                        id: '0038bd165bc442fe9d00a55d07cca6d3'
                        key: {
                            name: 'x_2120492_athidhi_department'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0083ac09642f4520b006895ba7c04bfe'
                        key: {
                            name: 'x_2120492_athidhi_guest'
                            element: 'identification_number'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '00baf674152f4d59b9355080391ac76b'
                        key: {
                            name: 'x_2120492_athidhi_restaurant'
                            element: 'opening_time'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '00bf4881e0614b1cb362d7d1d5e82dd8'
                        key: {
                            name: 'x_2120492_athidhi_incident'
                            element: 'description'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: '00d5d6a6f32343408555c5d98bc13646'
                        key: {
                            role: {
                                id: '0e2c8b4a8bd0443fb576b6f6b6349fbe'
                                key: {
                                    name: 'x_2120492_athidhi.manager'
                                }
                            }
                            contains: {
                                id: '240a492786cd43859dd397028582ac16'
                                key: {
                                    name: 'x_2120492_athidhi.receptionist'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '00e06409313f459084ae60d2f5baca91'
                        key: {
                            name: 'x_2120492_athidhi_inventory_transaction'
                            element: 'transaction_type'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '00fbc10353d444028b44ce7bf32f6b5d'
                        key: {
                            name: 'x_2120492_athidhi_guest'
                            element: 'identification_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '01532c7d852a42e9b80533419054dd85'
                        key: {
                            name: 'x_2120492_athidhi_payment'
                            element: 'payment_method'
                            value: 'card'
                        }
                    },
                    {
                        table: 'sys_number'
                        id: '01699b2871ee42c98436550cdb7d5c18'
                        key: {
                            category: 'x_2120492_athidhi_maintenance_request'
                            prefix: 'MNT'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '0190d95abe734f60ad20e09774a5b8ad'
                        key: {
                            name: 'x_2120492_athidhi_incident'
                            element: 'category'
                            value: 'safety'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '021caaa790f04ba3b68300dc65c77d41'
                        key: {
                            sys_security_acl: 'b9fdf85e9d7c4d939089ecc812c8d110'
                            sys_user_role: {
                                id: 'b45ac46436c14974b223c8bff451f7e8'
                                key: {
                                    name: 'x_2120492_athidhi.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '024c454a3d144f108c7e5023cd4afd31'
                        key: {
                            name: 'x_2120492_athidhi_service_catalog_item'
                            element: 'description'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0271c1db8c8b48abbbc5254f9b5efc4a'
                        key: {
                            name: 'x_2120492_athidhi_menu'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '02765c9c235241ff9d28c2a709173e2a'
                        key: {
                            name: 'x_2120492_athidhi_reservation'
                            element: 'children'
                            language: 'en'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '0284d39cb9ab4eacbd5992a6793b85c4'
                        key: {
                            name: 'x_2120492_athidhi_service_catalog_item'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '02adb26e3c084d0e840152650002ae26'
                        key: {
                            name: 'x_2120492_athidhi_food_order_item'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '02c64f25989a4ba7ab56b455cb48a2ee'
                        key: {
                            name: 'x_2120492_athidhi_payment'
                            element: 'status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '02da32ac48cd4cf9b4bd078fac25532d'
                        key: {
                            name: 'x_2120492_athidhi_service_request'
                            element: 'status'
                            value: 'accepted'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '033560244eec4ff4bd66d2a7875ea3c1'
                        key: {
                            name: 'x_2120492_athidhi_inventory_reorder'
                            element: 'approved_by'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '0366ed6c271e4decb09969515f8a55c2'
                        key: {
                            sys_security_acl: '4edb313bed594c37961589cc3f349010'
                            sys_user_role: {
                                id: 'b45ac46436c14974b223c8bff451f7e8'
                                key: {
                                    name: 'x_2120492_athidhi.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_number'
                        id: '03858f8644f04d7b992729cd69d77729'
                        key: {
                            category: 'x_2120492_athidhi_menu'
                            prefix: 'MNU'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '03b1ac123a8a49fdaae1e340fea722b8'
                        key: {
                            name: 'x_2120492_athidhi_inventory_transaction'
                            element: 'reference_number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '03e3c246d06f4474abac97725ffb148d'
                        key: {
                            name: 'x_2120492_athidhi_inventory_transaction'
                            element: 'reference_type'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '03f41dc9da094e1a8b37ad05f8d37f45'
                        key: {
                            sys_security_acl: '0e902bab72f64214b39792b73d9d6c5b'
                            sys_user_role: {
                                id: '0e2c8b4a8bd0443fb576b6f6b6349fbe'
                                key: {
                                    name: 'x_2120492_athidhi.manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '045d7c3a06794b149395c33a4446939d'
                        key: {
                            name: 'x_2120492_athidhi_payment'
                            element: 'status'
                            value: 'paid'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '045da2f6ff9e4206afa2dd60f1c56280'
                        key: {
                            sys_security_acl: '75fc729ec3fe49be906bacbd7965915e'
                            sys_user_role: {
                                id: 'b45ac46436c14974b223c8bff451f7e8'
                                key: {
                                    name: 'x_2120492_athidhi.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '049b466223f04b72ac5113ae15ec9e11'
                        key: {
                            name: 'x_2120492_athidhi_maintenance_request'
                            element: 'status'
                            value: 'waiting'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '04ac949b8bde4d93bdc3aaced2698311'
                        key: {
                            name: 'x_2120492_athidhi_room'
                            element: 'status'
                            value: 'maintenance'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '04d3c9cd76f84617b019761f55de0af1'
                        key: {
                            sys_security_acl: '43b91e08d376461db98b6eab6a2c550f'
                            sys_user_role: {
                                id: '8f68f11dd010432ba80972aa8ac2b77d'
                                key: {
                                    name: 'x_2120492_athidhi.housekeeping'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '04f2ea1554bd42af8f0499152e1a94f0'
                        key: {
                            name: 'x_2120492_athidhi_guest'
                            element: 'loyalty_tier'
                            value: 'gold'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0504031d908f4dc6bbeede9202ddda66'
                        key: {
                            name: 'x_2120492_athidhi_incident'
                            element: 'incident_number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '0523b56be3044aab82ce5ef239e65ef4'
                        key: {
                            sys_security_acl: '3c36adabd1ff4ef282011aee65e4e931'
                            sys_user_role: {
                                id: '0e2c8b4a8bd0443fb576b6f6b6349fbe'
                                key: {
                                    name: 'x_2120492_athidhi.manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '05cce9c36fb94511a5927a3db7ba121d'
                        key: {
                            sys_security_acl: '0b0961efc1714b33a24c19745cea88f3'
                            sys_user_role: {
                                id: 'b45ac46436c14974b223c8bff451f7e8'
                                key: {
                                    name: 'x_2120492_athidhi.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '05ce6fe895e049ed9b77331e1821561b'
                        key: {
                            name: 'x_2120492_athidhi_food_order'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '0614036d7dfb4ec79ef2229bf90a848f'
                        key: {
                            sys_security_acl: '6be7359e260c4e57b10838b980bed11a'
                            sys_user_role: {
                                id: 'b45ac46436c14974b223c8bff451f7e8'
                                key: {
                                    name: 'x_2120492_athidhi.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '06a0d114373f4eb99f28527a64332402'
                        key: {
                            name: 'x_2120492_athidhi_guest_preference'
                            element: 'preference_value'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '06b93b7473804df0acd3e8f388110feb'
                        key: {
                            name: 'x_2120492_athidhi_menu_item'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '06e241dfc42c4907b23be6d9124b9c3a'
                        key: {
                            sys_security_acl: '348788822a794d82b190d9432e0336e6'
                            sys_user_role: {
                                id: '0e2c8b4a8bd0443fb576b6f6b6349fbe'
                                key: {
                                    name: 'x_2120492_athidhi.manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '06e4556e1399491b91d72e3b05beeab5'
                        key: {
                            name: 'x_2120492_athidhi_inventory_transaction'
                            element: 'transaction_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '06ef14433a40420ebed45705fb0cc7b0'
                        key: {
                            sys_security_acl: '0eb4b258ad5d486f8d9b3fb369a15762'
                            sys_user_role: {
                                id: 'bd9b587c1f9047609d32f4eea97e73bb'
                                key: {
                                    name: 'x_2120492_athidhi.restaurant'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_number'
                        id: '06f9954eddee4572893064ac50ce6484'
                        key: {
                            category: 'x_2120492_athidhi_inventory_item'
                            prefix: 'INV'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '073d74da4a6447ce9cc0f3353453de29'
                        key: {
                            name: 'x_2120492_athidhi_guest_preference'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '0759facb206c4b6ab18090c42b79ec8d'
                        key: {
                            name: 'x_2120492_athidhi_restaurant'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '077085f819c74a79b89cbede724d45a4'
                        key: {
                            sys_security_acl: '609eb0610d104566b7cce4cb86e93d1b'
                            sys_user_role: {
                                id: '0e2c8b4a8bd0443fb576b6f6b6349fbe'
                                key: {
                                    name: 'x_2120492_athidhi.manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '07b27865c77e417690c4f8ef5cfd4a7a'
                        key: {
                            name: 'x_2120492_athidhi_department'
                            element: 'description'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '07cca8beca6f461dac530da7e02a6673'
                        key: {
                            name: 'x_2120492_athidhi_inventory_reorder'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '07daea00d7e84325b4d0960044360dce'
                        key: {
                            name: 'x_2120492_athidhi_service_request'
                            element: 'department'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '07f4b6d949ea4841a7b64ac0bba57aeb'
                        key: {
                            name: 'x_2120492_athidhi_stay'
                            element: 'expected_check_out'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '080fa3359558402d819d0e098c49bdfd'
                        key: {
                            sys_security_acl: 'e8b5c3592f3d4bc19d55220b11ebc87e'
                            sys_user_role: {
                                id: '0e2c8b4a8bd0443fb576b6f6b6349fbe'
                                key: {
                                    name: 'x_2120492_athidhi.manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '08c1805309184dc1b9785034b467ecce'
                        key: {
                            sys_security_acl: '3baeee9fa2834e5d87b0e4f8b744971b'
                            sys_user_role: {
                                id: '7a58b2b3dd1e4586ad7b6fb331fb8788'
                                key: {
                                    name: 'x_2120492_athidhi.guest'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '08cb100200344fb1b115855df9aab482'
                        key: {
                            sys_security_acl: '69b59c366920461e885266245f28b8ef'
                            sys_user_role: {
                                id: 'b45ac46436c14974b223c8bff451f7e8'
                                key: {
                                    name: 'x_2120492_athidhi.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '08cef8c87326448cbc146976eb6a52a9'
                        key: {
                            name: 'x_2120492_athidhi_restaurant'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '08ef8eb39e3b4f7787942be6d27c4ff1'
                        key: {
                            name: 'x_2120492_athidhi_incident'
                            element: 'service_request'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '09032d7019f344e0bedf0fc4ea93043f'
                        key: {
                            name: 'x_2120492_athidhi_room'
                            element: 'housekeeping_status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '0971f12f2de94c4f9956f008c91bb2d4'
                        key: {
                            name: 'x_2120492_athidhi_menu_item'
                            element: 'category'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '09cb0ac57e38484596c3d4491447ce33'
                        key: {
                            name: 'x_2120492_athidhi_guest'
                            element: 'last_name'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '09e3dbd5f12443b79294283b3582cc6a'
                        key: {
                            name: 'x_2120492_athidhi_menu'
                            element: 'valid_to'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '09e971a979b64ad9ac7dfed6a9bd1ea4'
                        key: {
                            name: 'x_2120492_athidhi_service_catalog_item'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0a12279a51a44621a8f66f1ef07f451b'
                        key: {
                            name: 'x_2120492_athidhi_menu'
                            element: 'name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0a21229ad4814078b2dae8bf2761a71d'
                        key: {
                            name: 'x_2120492_athidhi_reservation'
                            element: 'check_in'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0a3535b1709f4b05b101cca7323cbc8c'
                        key: {
                            name: 'x_2120492_athidhi_amenity'
                            element: 'code'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '0a3c0b2dd12c42359a1d2818c1234832'
                        key: {
                            sys_security_acl: '641e9ef191d54025b868632bb4a58198'
                            sys_user_role: {
                                id: 'b45ac46436c14974b223c8bff451f7e8'
                                key: {
                                    name: 'x_2120492_athidhi.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '0a3daa71758c40358941606d5ee3e036'
                        key: {
                            name: 'x_2120492_athidhi_work_task'
                            element: 'state'
                            value: 'in_progress'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '0aab3ec681ca40d1bee72582eb41bbf5'
                        key: {
                            sys_security_acl: '4fa92781ff1b4a1aad2749f3c2a2b5d7'
                            sys_user_role: {
                                id: '7a58b2b3dd1e4586ad7b6fb331fb8788'
                                key: {
                                    name: 'x_2120492_athidhi.guest'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '0ac3496312804fbfa138b6f113a177ea'
                        key: {
                            sys_security_acl: '65a51030a5ec417b8945d7ff46e34580'
                            sys_user_role: {
                                id: '240a492786cd43859dd397028582ac16'
                                key: {
                                    name: 'x_2120492_athidhi.receptionist'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '0ae2fa713ead4c608ca972ec39fac60b'
                        key: {
                            sys_security_acl: 'b3224b2146fa490282498a9297d9593a'
                            sys_user_role: {
                                id: '7a58b2b3dd1e4586ad7b6fb331fb8788'
                                key: {
                                    name: 'x_2120492_athidhi.guest'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '0aed605ee9e64b5ebf2b1182a41c2c4d'
                        key: {
                            sys_security_acl: '1d20953c74b94a5cb3927f1f34eefe7e'
                            sys_user_role: {
                                id: '0e2c8b4a8bd0443fb576b6f6b6349fbe'
                                key: {
                                    name: 'x_2120492_athidhi.manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: '0afa268cc0f349e2831172332a68fe58'
                        key: {
                            sys_ui_action: '3200c3186dbd4bf2b7957f2431398b84'
                            sys_user_role: {
                                id: '0e2c8b4a8bd0443fb576b6f6b6349fbe'
                                key: {
                                    name: 'x_2120492_athidhi.manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0b11edc183b3425b90f74677f88c2266'
                        key: {
                            name: 'x_2120492_athidhi_housekeeping_task'
                            element: 'task_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: '0b19a25f7f7b46f7a7521ca1c663c95c'
                        key: {
                            sys_ui_action: '591e5f4dcbdb4cabb4323631fed8f9a9'
                            sys_user_role: {
                                id: 'b45ac46436c14974b223c8bff451f7e8'
                                key: {
                                    name: 'x_2120492_athidhi.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '0b42cda2fbf94eb4a4cf833191a798e3'
                        key: {
                            name: 'x_2120492_athidhi_service_request'
                            element: 'status'
                            value: 'cancelled'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0baa15df507e4c4d83ef44987d95aca3'
                        key: {
                            name: 'x_2120492_athidhi_inventory_reorder'
                            element: 'reorder_number'
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: '0bcf159661834328b6151d5d2f4f97bd'
                        key: {
                            sys_ui_action: '7a80e24564004431bcecfb96c348e22f'
                            sys_user_role: {
                                id: '8f68f11dd010432ba80972aa8ac2b77d'
                                key: {
                                    name: 'x_2120492_athidhi.housekeeping'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0bfc1006e0454e8f9a72352b443c3401'
                        key: {
                            name: 'x_2120492_athidhi_room_amenity'
                            element: 'amenity'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '0c165637bb2e4a3fa7607b98ace018e8'
                        key: {
                            name: 'x_2120492_athidhi_incident'
                            element: 'category'
                            value: 'security'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0c1bf57035084595bc2931eb4ca17c80'
                        key: {
                            name: 'x_2120492_athidhi_menu_item'
                            element: 'price'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '0ca553f3f1ae46ef9af59c2d2f0520a2'
                        key: {
                            name: 'x_2120492_athidhi_work_task'
                            element: 'task_type'
                            value: 'housekeeping'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0cb4f427d9584a40b5464bc5b56596f2'
                        key: {
                            name: 'x_2120492_athidhi_service_catalog_item'
                            element: 'chargeable'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '0ccde6162e5745e6b4e40b8966a1bee3'
                        key: {
                            sys_security_acl: 'e387c99b072d4688a6a635b2d8f306d7'
                            sys_user_role: {
                                id: 'bd9b587c1f9047609d32f4eea97e73bb'
                                key: {
                                    name: 'x_2120492_athidhi.restaurant'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '0d0a1037137449ddb6c1bc1d3415ed87'
                        key: {
                            sys_security_acl: '0884bac06245425bb31be27443bbfad6'
                            sys_user_role: {
                                id: 'b45ac46436c14974b223c8bff451f7e8'
                                key: {
                                    name: 'x_2120492_athidhi.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0d130f7ae202408fb930d3d8a0d2bae4'
                        key: {
                            name: 'x_2120492_athidhi_ai_interaction_log'
                            element: 'execution_duration_ms'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0d29017ba6ee4c949b9d26ff7a0ec7d4'
                        key: {
                            name: 'x_2120492_athidhi_incident'
                            element: 'category'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0d8a411de10845279b1b6d1be20b74e4'
                        key: {
                            name: 'x_2120492_athidhi_food_order'
                            element: 'status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '0dd18a660b194726bc4af5cbc8613a1f'
                        key: {
                            sys_security_acl: '9f0fca3f21484ded8d59597432482f78'
                            sys_user_role: {
                                id: 'b45ac46436c14974b223c8bff451f7e8'
                                key: {
                                    name: 'x_2120492_athidhi.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '0de88431d8b440049b96e4e42847d9a0'
                        key: {
                            name: 'x_2120492_athidhi_department'
                            element: 'name'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: '0e2c8b4a8bd0443fb576b6f6b6349fbe'
                        key: {
                            name: 'x_2120492_athidhi.manager'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0e3b580fc8f24e26a780348cb71f3d31'
                        key: {
                            name: 'x_2120492_athidhi_payment'
                            element: 'payment_date'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0e451d50a4c34543aec91f6272eec0e8'
                        key: {
                            name: 'x_2120492_athidhi_room'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '0e4aa53ad24a45c399b7fdde9f7a19b6'
                        key: {
                            sys_security_acl: '98adc9bc1b244bc4b1e1e005d192257d'
                            sys_user_role: {
                                id: '8f68f11dd010432ba80972aa8ac2b77d'
                                key: {
                                    name: 'x_2120492_athidhi.housekeeping'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '0eb2d9ef11be4925aae5b1677220c626'
                        key: {
                            sys_security_acl: '98adc9bc1b244bc4b1e1e005d192257d'
                            sys_user_role: {
                                id: '0e2c8b4a8bd0443fb576b6f6b6349fbe'
                                key: {
                                    name: 'x_2120492_athidhi.manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0ec082a58d9148fa86490c93f9b2eebf'
                        key: {
                            name: 'x_2120492_athidhi_payment'
                            element: 'transaction_reference'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0eca599aa2de4eb5935e30f1a702ac26'
                        key: {
                            name: 'x_2120492_athidhi_room'
                            element: 'room_number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '0f558dfc8b8444a3b718ee60e61b352b'
                        key: {
                            name: 'x_2120492_athidhi_incident'
                            element: 'state'
                            value: 'cancelled'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0f9eb969bcc843efb57b558f12f48153'
                        key: {
                            name: 'x_2120492_athidhi_incident'
                            element: 'resolution_notes'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0fa9415e175c42a59f3e73fb3aef1f08'
                        key: {
                            name: 'x_2120492_athidhi_guest'
                            element: 'email'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '0fdd3a8ee4864d359b39cca20e24ba5d'
                        key: {
                            sys_security_acl: 'ed3ca82ec2404c57a1691b928c4dca48'
                            sys_user_role: {
                                id: 'b45ac46436c14974b223c8bff451f7e8'
                                key: {
                                    name: 'x_2120492_athidhi.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '0fefb835317f4cb8b7b21c98659ab331'
                        key: {
                            name: 'x_2120492_athidhi_guest_preference'
                            element: 'preference_type'
                            value: 'room'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '100036cb2f924737af5eb768fc411bca'
                        key: {
                            sys_security_acl: 'b58ecb147c364ccbbab54329ab0eb127'
                            sys_user_role: {
                                id: 'b45ac46436c14974b223c8bff451f7e8'
                                key: {
                                    name: 'x_2120492_athidhi.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1056845c58544951ad6f6df6a09f3954'
                        key: {
                            name: 'x_2120492_athidhi_inventory_item'
                            element: 'unit_cost'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '106a7a5d81584e33a8b46fe16fb4a894'
                        key: {
                            name: 'x_2120492_athidhi_inventory_item'
                            element: 'category'
                            value: 'bathroom'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '10e3087dc8564733b5ca8f4163b0d7ea'
                        key: {
                            sys_security_acl: 'da44235fbac4497884218531468b496e'
                            sys_user_role: {
                                id: '240a492786cd43859dd397028582ac16'
                                key: {
                                    name: 'x_2120492_athidhi.receptionist'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '12500d0079b14afa94f3589d0c7a8538'
                        key: {
                            name: 'x_2120492_athidhi_restaurant'
                            element: 'active'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '126775a742fd4522b59048914f3e82a8'
                        key: {
                            name: 'x_2120492_athidhi_inventory_item'
                            element: 'current_quantity'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '12d128c1244c4081a055b1c3c0744f9d'
                        key: {
                            name: 'x_2120492_athidhi_room'
                            element: 'status'
                            value: 'occupied'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '12e55192a85d4a3381b654bed98b07f9'
                        key: {
                            name: 'x_2120492_athidhi_ai_interaction_log'
                            element: 'action_result'
                            value: 'VALIDATION_ERROR'
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: '13739de2f22b4f00b3c07725aaa547ed'
                        key: {
                            sys_ui_action: 'a18b0f47a93043a2af26fcd7fc9bf742'
                            sys_user_role: {
                                id: 'bd9b587c1f9047609d32f4eea97e73bb'
                                key: {
                                    name: 'x_2120492_athidhi.restaurant'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '14b92bd58f404832bab058a2fd2f8c54'
                        key: {
                            name: 'x_2120492_athidhi_work_task'
                            element: 'description'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '14c1b195ed044ea9be41aeb916a3427a'
                        key: {
                            name: 'x_2120492_athidhi_incident'
                            element: 'category'
                            value: 'room_issue'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '14cf6a7c9db34830bc099727ecac5e78'
                        key: {
                            name: 'x_2120492_athidhi_ai_interaction_log'
                            element: 'request_category'
                            value: 'service_catalog'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '150fbb81ea4045b1958d32bc510fcdfd'
                        key: {
                            sys_security_acl: 'f76b832f789a4de5a9d5548b5bd85294'
                            sys_user_role: {
                                id: '0e2c8b4a8bd0443fb576b6f6b6349fbe'
                                key: {
                                    name: 'x_2120492_athidhi.manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '153c62ce4a4f4771a6c07043a03bedd6'
                        key: {
                            name: 'x_2120492_athidhi_guest_preference'
                            element: 'preference_type'
                            value: 'other'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '1620dc73bf5b48cfb80acd1a88582448'
                        key: {
                            name: 'x_2120492_athidhi_room'
                            element: 'occupancy_status'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '164017db989840cd8eff5a68ee9c83eb'
                        key: {
                            sys_security_acl: '69b59c366920461e885266245f28b8ef'
                            sys_user_role: {
                                id: '0e2c8b4a8bd0443fb576b6f6b6349fbe'
                                key: {
                                    name: 'x_2120492_athidhi.manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '165322edf3e747409339b887edcde21c'
                        key: {
                            name: 'x_2120492_athidhi_food_order'
                            element: 'order_type'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '16913e51abc3469c8905d7de64ba6c55'
                        key: {
                            sys_security_acl: '98adc9bc1b244bc4b1e1e005d192257d'
                            sys_user_role: {
                                id: '7a58b2b3dd1e4586ad7b6fb331fb8788'
                                key: {
                                    name: 'x_2120492_athidhi.guest'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '16a4734e19e64e09ac6d47c51ca60609'
                        key: {
                            name: 'x_2120492_athidhi_service_request'
                            element: 'request_type'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '16e35bdf9f9f48f3beba6fce7435660b'
                        key: {
                            sys_security_acl: '609eb0610d104566b7cce4cb86e93d1b'
                            sys_user_role: {
                                id: 'b45ac46436c14974b223c8bff451f7e8'
                                key: {
                                    name: 'x_2120492_athidhi.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '16f060635e09474bb3f4dba45f159661'
                        key: {
                            name: 'x_2120492_athidhi_maintenance_request'
                            element: 'category'
                            value: 'other'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '1700bc5fd7f94ee6ba1eca574bfde419'
                        key: {
                            name: 'x_2120492_athidhi_ai_interaction_log'
                            element: 'request_category'
                            value: 'security_violation'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '170d4a36ef804ea4a981a1405f4db7a3'
                        key: {
                            name: 'x_2120492_athidhi_reservation'
                            element: 'reservation_number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1781b80124bd4397a2e79fbeed77ef93'
                        key: {
                            name: 'x_2120492_athidhi_staff_profile'
                            element: 'job_title'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1796d91231c443659c8c848f09c50de3'
                        key: {
                            name: 'x_2120492_athidhi_restaurant'
                            element: 'location'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '17de22b807c844748ce5b94e69e50723'
                        key: {
                            sys_security_acl: '7269ba59ec134588aa0762faa3d081a9'
                            sys_user_role: {
                                id: '3e9f6959b3014deca7ed1004952c0462'
                                key: {
                                    name: 'x_2120492_athidhi.maintenance'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '18157224edca40429b0baa9e74d18c6c'
                        key: {
                            name: 'x_2120492_athidhi_inventory_reorder'
                            element: 'inventory_item'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1856686a865c4794a998e78c9c3f91e5'
                        key: {
                            name: 'x_2120492_athidhi_reservation'
                            element: 'payment_status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '185746ae424742f29b4bbd0eb758474f'
                        key: {
                            sys_security_acl: '29522196288346fa8daed8d46faddaa6'
                            sys_user_role: {
                                id: '240a492786cd43859dd397028582ac16'
                                key: {
                                    name: 'x_2120492_athidhi.receptionist'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_number'
                        id: '186dc918df2a4e17b8b504ff083b0372'
                        key: {
                            category: 'x_2120492_athidhi_incident'
                            prefix: 'INC'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '18a0e8b885cd46d5a6d257e3c0871283'
                        key: {
                            name: 'x_2120492_athidhi_inventory_item'
                            element: 'reorder_quantity'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '18c0ebefb4554e0b90c0f04d0cbe7988'
                        key: {
                            sys_security_acl: '0f5f068cd6f948e3804390ab48126c9a'
                            sys_user_role: {
                                id: 'b45ac46436c14974b223c8bff451f7e8'
                                key: {
                                    name: 'x_2120492_athidhi.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '18e98c9fe98d4941b9f6162699b7a161'
                        key: {
                            name: 'x_2120492_athidhi_work_task'
                            element: 'state'
                            value: 'blocked'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '18f8daced57049d8be4756cfe8508cc0'
                        key: {
                            name: 'x_2120492_athidhi_department'
                            element: 'name'
                            value: 'it'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '191c5e3e96ed43fcad2968d63e9d05f4'
                        key: {
                            sys_security_acl: '5047336c60e84c109135300286702781'
                            sys_user_role: {
                                id: '240a492786cd43859dd397028582ac16'
                                key: {
                                    name: 'x_2120492_athidhi.receptionist'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '1927215866d14d279701eb432b605881'
                        key: {
                            sys_security_acl: '802f0d4f43ce4d7cb1fba608c98ab3e8'
                            sys_user_role: {
                                id: 'b45ac46436c14974b223c8bff451f7e8'
                                key: {
                                    name: 'x_2120492_athidhi.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '194434a8337348a2898da97021211a79'
                        key: {
                            sys_security_acl: '781623196c144090aa4acb6ad8bad8f3'
                            sys_user_role: {
                                id: 'bd9b587c1f9047609d32f4eea97e73bb'
                                key: {
                                    name: 'x_2120492_athidhi.restaurant'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '19640e62a4724fa396d157dc3a9d8563'
                        key: {
                            name: 'x_2120492_athidhi_ai_interaction_log'
                            element: 'request_category'
                            value: 'faq'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '19a24385990a4211abb26e266b303ace'
                        key: {
                            name: 'x_2120492_athidhi_work_task'
                            element: 'state'
                            value: 'cancelled'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '1a09d0792c4b4465973a5ca827712006'
                        key: {
                            sys_security_acl: '1e8acc49ba7f4400b07b9883cc5636ca'
                            sys_user_role: {
                                id: '8f68f11dd010432ba80972aa8ac2b77d'
                                key: {
                                    name: 'x_2120492_athidhi.housekeeping'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1a57739fa9334f168172182eeaf4a895'
                        key: {
                            name: 'x_2120492_athidhi_inventory_item'
                            element: 'current_quantity'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '1a79092cbaca48b0acc146716a4a5b19'
                        key: {
                            name: 'x_2120492_athidhi_work_task'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1ad38e34fb074570b29d8fddf534bd69'
                        key: {
                            name: 'x_2120492_athidhi_menu_item'
                            element: 'description'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1b611b16881f4ab2a9118b330d1b4b49'
                        key: {
                            name: 'x_2120492_athidhi_stay'
                            element: 'special_notes'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '1b87816d2fb5416bb5a0e49f1d0afb35'
                        key: {
                            sys_security_acl: '89302a9c479b4cfdbf5ef4ccb17ff38e'
                            sys_user_role: {
                                id: 'bd9b587c1f9047609d32f4eea97e73bb'
                                key: {
                                    name: 'x_2120492_athidhi.restaurant'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1bb193ac178844deb3cb546dbc33c0cb'
                        key: {
                            name: 'x_2120492_athidhi_inventory_item'
                            element: 'storage_location'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1bd400b0f5ee4118ab576dd82f9919fb'
                        key: {
                            name: 'x_2120492_athidhi_service_catalog_item'
                            element: 'item_number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1c0c9e62aadf445bb86787ea88b227bb'
                        key: {
                            name: 'x_2120492_athidhi_menu'
                            element: 'description'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '1c0fa4f44abd4b18b06e3f7367381219'
                        key: {
                            name: 'x_2120492_athidhi_reservation'
                            element: 'status'
                            value: 'draft'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '1c2a82ff6d0342b5aa19ac770ecb5731'
                        key: {
                            sys_security_acl: '9fea4f69a56d49e294c4bf7ab4aecd47'
                            sys_user_role: {
                                id: 'b45ac46436c14974b223c8bff451f7e8'
                                key: {
                                    name: 'x_2120492_athidhi.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1c3021ae867645fb92e1d2e0aae85284'
                        key: {
                            name: 'x_2120492_athidhi_menu'
                            element: 'menu_number'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1c38551e35c7432997e58ae105522405'
                        key: {
                            name: 'x_2120492_athidhi_room_type'
                            element: 'name'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '1c73aab4017340fdab9edca45de77a21'
                        key: {
                            sys_security_acl: '50e34967cef84b2daa571097a9999d3d'
                            sys_user_role: {
                                id: '0e2c8b4a8bd0443fb576b6f6b6349fbe'
                                key: {
                                    name: 'x_2120492_athidhi.manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '1c8360e47da04399b2ef16d26b718ecd'
                        key: {
                            sys_security_acl: '8587fc161b4441f1994af14142c7f923'
                            sys_user_role: {
                                id: 'b45ac46436c14974b223c8bff451f7e8'
                                key: {
                                    name: 'x_2120492_athidhi.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '1caebef92f0143eabe4d474451fe5e45'
                        key: {
                            name: 'x_2120492_athidhi_ai_interaction_log'
                            element: 'action_result'
                            value: 'PROVIDER_ERROR'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1cb727bfb85346bbb7f3a1937a59a2d4'
                        key: {
                            name: 'x_2120492_athidhi_food_order_item'
                            element: 'order'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '1ce9590cb1d14aaf99a8ff6662a014d5'
                        key: {
                            sys_security_acl: '3fd23b86394846eda188461010faa27f'
                            sys_user_role: {
                                id: '0e2c8b4a8bd0443fb576b6f6b6349fbe'
                                key: {
                                    name: 'x_2120492_athidhi.manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '1d4345db005a48e689fff9fec122e1ce'
                        key: {
                            name: 'x_2120492_athidhi_reservation'
                            element: 'payment_status'
                            value: 'pending'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '1d74cd5abec64c678c7984d23a6c27c8'
                        key: {
                            name: 'x_2120492_athidhi_inventory_reorder'
                            element: 'status'
                            value: 'cancelled'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '1dcc28d5a45d4a70b4f9c76c36a5cb85'
                        key: {
                            sys_security_acl: '625bfd1547b44ba6a011585fc8cc2d5a'
                            sys_user_role: {
                                id: '8f68f11dd010432ba80972aa8ac2b77d'
                                key: {
                                    name: 'x_2120492_athidhi.housekeeping'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '1dfc917343054e24a3eb82b397426904'
                        key: {
                            sys_security_acl: '9f0fca3f21484ded8d59597432482f78'
                            sys_user_role: {
                                id: '240a492786cd43859dd397028582ac16'
                                key: {
                                    name: 'x_2120492_athidhi.receptionist'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '1e152d7465cf43a8b697342f638bd502'
                        key: {
                            sys_security_acl: '1e525e09ab9942ec84acc9c1e6c7eb80'
                            sys_user_role: {
                                id: '240a492786cd43859dd397028582ac16'
                                key: {
                                    name: 'x_2120492_athidhi.receptionist'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '1e269d8de9864422aab6bbffc0258b88'
                        key: {
                            sys_security_acl: '3b63f635228c4259b7ac86f1faf39bfe'
                            sys_user_role: {
                                id: '240a492786cd43859dd397028582ac16'
                                key: {
                                    name: 'x_2120492_athidhi.receptionist'
                                }
                            }
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '1e40b8a0bb10417291d5fdb238b96027'
                        key: {
                            name: 'x_2120492_athidhi_stay'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '1e462d587637407493f4e1525ed8aa3c'
                        key: {
                            name: 'x_2120492_athidhi_housekeeping_task'
                            element: 'task_type'
                            value: 'inspection'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '1e5f85db0e0d4f2ca2eccee104000d11'
                        key: {
                            sys_security_acl: '3ecb327fa8f448beb7f09e55832943a0'
                            sys_user_role: {
                                id: '0e2c8b4a8bd0443fb576b6f6b6349fbe'
                                key: {
                                    name: 'x_2120492_athidhi.manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '1e7171d655c645fcb0234c245bc60dd8'
                        key: {
                            sys_security_acl: '5351073f028c4bcaa249b928c271cc0a'
                            sys_user_role: {
                                id: '0e2c8b4a8bd0443fb576b6f6b6349fbe'
                                key: {
                                    name: 'x_2120492_athidhi.manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '1ea051fed7bb40a59163fecdc8f34e00'
                        key: {
                            sys_security_acl: '625bfd1547b44ba6a011585fc8cc2d5a'
                            sys_user_role: {
                                id: 'b45ac46436c14974b223c8bff451f7e8'
                                key: {
                                    name: 'x_2120492_athidhi.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1ecd8a35211440f1b427759caaab4c44'
                        key: {
                            name: 'x_2120492_athidhi_service_catalog_item'
                            element: 'chargeable'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '1edc883224f143c38daf0344330ac3da'
                        key: {
                            name: 'x_2120492_athidhi_inventory_item'
                            element: 'category'
                            value: 'linen'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '1f50aa763c23415fa854744925a6aaa7'
                        key: {
                            sys_security_acl: 'a71479a5a9f74e8093b04b2a8eb6a3c1'
                            sys_user_role: {
                                id: '7a58b2b3dd1e4586ad7b6fb331fb8788'
                                key: {
                                    name: 'x_2120492_athidhi.guest'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1f6664409b404d04a74d898d0f9b8630'
                        key: {
                            name: 'x_2120492_athidhi_maintenance_request'
                            element: 'category'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '1fef9a1a60534991b4738f805176dfb6'
                        key: {
                            name: 'x_2120492_athidhi_work_task'
                            element: 'state'
                            value: 'assigned'
                        }
                    },
                    {
                        table: 'sys_number'
                        id: '2009fc49d5274c25946b83af90596d3e'
                        key: {
                            category: 'x_2120492_athidhi_housekeeping_task'
                            prefix: 'HKT'
                        }
                    },
                    {
                        table: 'sys_number'
                        id: '200f0c5daf6d40e0b5b65767a66f7a50'
                        key: {
                            category: 'x_2120492_athidhi_reservation'
                            prefix: 'RES'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2019acba71eb46be8c980be724eac346'
                        key: {
                            name: 'x_2120492_athidhi_ai_interaction_log'
                            element: 'model'
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: '202da4f482254898a7ca36d10686934b'
                        key: {
                            sys_ui_action: '07448868eba9489cac5ded657bc79265'
                            sys_user_role: {
                                id: '0e2c8b4a8bd0443fb576b6f6b6349fbe'
                                key: {
                                    name: 'x_2120492_athidhi.manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2059dd9bdf944271936ace258cbc12e1'
                        key: {
                            name: 'x_2120492_athidhi_incident'
                            element: 'opened_at'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '206508bed76741caa78925f0b2f29c5d'
                        key: {
                            name: 'x_2120492_athidhi_work_task'
                            element: 'service_request'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '207c1cf1d6f54ce89d4649793861750b'
                        key: {
                            name: 'x_2120492_athidhi_service_request'
                            element: 'room'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '20bf9b75752048549dff42a99b6edd18'
                        key: {
                            name: 'x_2120492_athidhi_food_order'
                            element: 'status'
                            value: 'new'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '20ccd5d915534ff1a6d1f476e4da3a20'
                        key: {
                            sys_security_acl: '81137e087625493f8a3c521fe8dc1fcb'
                            sys_user_role: {
                                id: 'b45ac46436c14974b223c8bff451f7e8'
                                key: {
                                    name: 'x_2120492_athidhi.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '21e785a892b84c6b874a77a6244e40b7'
                        key: {
                            sys_security_acl: 'e59765aac1f7490db19402f680d5928d'
                            sys_user_role: {
                                id: 'b45ac46436c14974b223c8bff451f7e8'
                                key: {
                                    name: 'x_2120492_athidhi.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '2204282977d945778ad72fc6017e6dc9'
                        key: {
                            name: 'x_2120492_athidhi_food_order'
                            element: 'order_type'
                            value: 'takeaway'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '22525c500c6a495ea3a59b6e564fb1f5'
                        key: {
                            name: 'x_2120492_athidhi_department'
                            element: 'manager'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '225a3fe274f34346964339effad00218'
                        key: {
                            sys_security_acl: 'de8322dfd365426d81aa0ce1e23a53a9'
                            sys_user_role: {
                                id: '240a492786cd43859dd397028582ac16'
                                key: {
                                    name: 'x_2120492_athidhi.receptionist'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: '227add7e06d244aab9aeb62d0f9eaecc'
                        key: {
                            sys_ui_action: '1d2f24ed96fc49f181f74e1365382666'
                            sys_user_role: {
                                id: '0e2c8b4a8bd0443fb576b6f6b6349fbe'
                                key: {
                                    name: 'x_2120492_athidhi.manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '22dd70f12ead42d593e5d30116a7ea74'
                        key: {
                            name: 'x_2120492_athidhi_staff_profile'
                            element: 'active'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '22f15be457354e5aa45e36b08b150542'
                        key: {
                            name: 'x_2120492_athidhi_ai_interaction_log'
                            element: 'action_result'
                            value: 'INFORMATION'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '2306b04904b3439f85f1512e5de317c2'
                        key: {
                            sys_security_acl: 'a306555f0c0c4591a76f21a00a6f6304'
                            sys_user_role: {
                                id: '240a492786cd43859dd397028582ac16'
                                key: {
                                    name: 'x_2120492_athidhi.receptionist'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '235e0b420b3a443d8459e1adc76cbfda'
                        key: {
                            name: 'x_2120492_athidhi_inventory_transaction'
                            element: 'inventory_item'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: '240a492786cd43859dd397028582ac16'
                        key: {
                            name: 'x_2120492_athidhi.receptionist'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '24698ce1ea804eb9acf0d77d925e03e2'
                        key: {
                            name: 'x_2120492_athidhi_stay'
                            element: 'reservation'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2479c25a80c64fca92bb76b6409b5b4e'
                        key: {
                            name: 'x_2120492_athidhi_amenity'
                            element: 'active'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '248b03c0c1cd4357811dedf25c97d6bb'
                        key: {
                            sys_security_acl: 'e387c99b072d4688a6a635b2d8f306d7'
                            sys_user_role: {
                                id: '3e9f6959b3014deca7ed1004952c0462'
                                key: {
                                    name: 'x_2120492_athidhi.maintenance'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '249d50246a11406aad37d852af6c71e5'
                        key: {
                            name: 'x_2120492_athidhi_room'
                            element: 'housekeeping_status'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '24aef18fd98441fabb1fb35727d1aacc'
                        key: {
                            name: 'x_2120492_athidhi_reservation'
                            element: 'adults'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '24b5379dc02748909ae91f2049fda4c5'
                        key: {
                            name: 'x_2120492_athidhi_room_type'
                            element: 'bed_type'
                            value: 'queen'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '24dcb5a96d7b4a55bf5036d6c9d60669'
                        key: {
                            name: 'x_2120492_athidhi_work_task'
                            element: 'description'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '257c434a516d4934875516c730c0b9de'
                        key: {
                            name: 'x_2120492_athidhi_menu'
                            element: 'menu_type'
                            value: 'special'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '25a281d3f4b14d5cb42450ace565a588'
                        key: {
                            sys_security_acl: '98e0dfa8781a459f95882265bf684ec4'
                            sys_user_role: {
                                id: '3e9f6959b3014deca7ed1004952c0462'
                                key: {
                                    name: 'x_2120492_athidhi.maintenance'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '25cf26c60d854e74ae056aad96697657'
                        key: {
                            sys_security_acl: '43b91e08d376461db98b6eab6a2c550f'
                            sys_user_role: {
                                id: '240a492786cd43859dd397028582ac16'
                                key: {
                                    name: 'x_2120492_athidhi.receptionist'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: '262ab112997c4de2a03735b6063c4cc4'
                        key: {
                            sys_ui_action: 'c54163a3014147fb9843d46f01ddbdce'
                            sys_user_role: {
                                id: '3e9f6959b3014deca7ed1004952c0462'
                                key: {
                                    name: 'x_2120492_athidhi.maintenance'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '26402cb19eb3425abc9f6ac9ba42833f'
                        key: {
                            name: 'x_2120492_athidhi_ai_interaction_log'
                            element: 'action_result'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '265cae3c419940e4a1a092994d0abc5f'
                        key: {
                            name: 'x_2120492_athidhi_food_order'
                            element: 'service_request'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '266e060879ed4f86a54f27521bf03349'
                        key: {
                            name: 'x_2120492_athidhi_restaurant'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '26bab2b02d754261a0c7472f38ada129'
                        key: {
                            sys_security_acl: '19ce062239c44478913a025bed18236f'
                            sys_user_role: {
                                id: '0e2c8b4a8bd0443fb576b6f6b6349fbe'
                                key: {
                                    name: 'x_2120492_athidhi.manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '26e6f29e4b674043aa52c8784d166699'
                        key: {
                            sys_security_acl: 'b58ecb147c364ccbbab54329ab0eb127'
                            sys_user_role: {
                                id: '0e2c8b4a8bd0443fb576b6f6b6349fbe'
                                key: {
                                    name: 'x_2120492_athidhi.manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '26ea5576bca847d9a9622f69701de1c8'
                        key: {
                            name: 'x_2120492_athidhi_reservation'
                            element: 'room_type'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '26f8fa3771c14b37a7069062289d6a82'
                        key: {
                            sys_security_acl: '31f27f36e7f344eb9d23558e3250c542'
                            sys_user_role: {
                                id: '8f68f11dd010432ba80972aa8ac2b77d'
                                key: {
                                    name: 'x_2120492_athidhi.housekeeping'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '271db23281dd4082b032ca7085428956'
                        key: {
                            name: 'x_2120492_athidhi_inventory_item'
                            element: 'minimum_quantity'
                            language: 'en'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '27368b323ca24d85a2a9bd5b8a08951f'
                        key: {
                            name: 'x_2120492_athidhi_food_order'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '274f2e565856480b9a34690ae2cea3d5'
                        key: {
                            name: 'x_2120492_athidhi_work_task'
                            element: 'short_description'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '277e3b92fab849af94a8ad90a04737c4'
                        key: {
                            sys_security_acl: '78b24b1238da4b4c8c6a11617bb92b14'
                            sys_user_role: {
                                id: '240a492786cd43859dd397028582ac16'
                                key: {
                                    name: 'x_2120492_athidhi.receptionist'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '27b4d866930140d1950fd6b31e1e95e9'
                        key: {
                            name: 'x_2120492_athidhi_service_request'
                            element: 'catalog_item'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '27b8287c87b042b296ebf987030d4e78'
                        key: {
                            name: 'x_2120492_athidhi_menu'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '27bb2ab8e7b748498360479adbfc4c79'
                        key: {
                            name: 'x_2120492_athidhi_maintenance_request'
                            element: 'description'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '27c276bbe81344e8adb6f3777bc72b19'
                        key: {
                            name: 'x_2120492_athidhi_payment'
                            element: 'status'
                            value: 'partially_refunded'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '27d1cea9828b468fa7be49bc061311dc'
                        key: {
                            name: 'x_2120492_athidhi_room'
                            element: 'housekeeping_status'
                            value: 'dirty'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '27d568f12c254008904c2f09fa777381'
                        key: {
                            name: 'x_2120492_athidhi_menu'
                            element: 'menu_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '27eaab7d96484caca24f3778825fc97f'
                        key: {
                            sys_security_acl: 'a306555f0c0c4591a76f21a00a6f6304'
                            sys_user_role: {
                                id: 'b45ac46436c14974b223c8bff451f7e8'
                                key: {
                                    name: 'x_2120492_athidhi.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '28023fe8b9c24fd1a4e3e0cf00aac102'
                        key: {
                            name: 'x_2120492_athidhi_maintenance_request'
                            element: 'status'
                            value: 'assigned'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '2855ba8fa1ce44f98b6721905c1bf5cd'
                        key: {
                            name: 'x_2120492_athidhi_incident'
                            element: 'category'
                            value: 'guest_issue'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '28605bae06f14560ad311ade667044d3'
                        key: {
                            name: 'x_2120492_athidhi_room'
                            element: 'notes'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '28a2b44fa64445e6a3cd7e4f7dd5624f'
                        key: {
                            sys_security_acl: '98adc9bc1b244bc4b1e1e005d192257d'
                            sys_user_role: {
                                id: 'b45ac46436c14974b223c8bff451f7e8'
                                key: {
                                    name: 'x_2120492_athidhi.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '292514bf26594b7abade658df608a86b'
                        key: {
                            name: 'x_2120492_athidhi_menu'
                            element: 'restaurant'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '294e05349c304aeea489d46ab1a79d60'
                        key: {
                            sys_security_acl: '802f0d4f43ce4d7cb1fba608c98ab3e8'
                            sys_user_role: {
                                id: 'bd9b587c1f9047609d32f4eea97e73bb'
                                key: {
                                    name: 'x_2120492_athidhi.restaurant'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '29751c3869584db698919736edf7cd6b'
                        key: {
                            name: 'x_2120492_athidhi_work_task'
                            element: 'state'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '297a9d3ed31a4ee086e938b178887f49'
                        key: {
                            name: 'x_2120492_athidhi_housekeeping_task'
                            element: 'notes'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '297c667e40e04b26b72356b6eeb2aada'
                        key: {
                            name: 'x_2120492_athidhi_incident'
                            element: 'room'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '29d52c9ff53c480f95cf6abe6c4afc99'
                        key: {
                            name: 'x_2120492_athidhi_menu_item'
                            element: 'dietary_type'
                            value: 'vegan'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '29d6be4573064a2ea56b63c92064a83e'
                        key: {
                            name: 'x_2120492_athidhi_inventory_transaction'
                            element: 'transaction_number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '2a2741f4b87242c0ad04664865d2f449'
                        key: {
                            sys_security_acl: 'ff4d6d536ed14135ae4cb6398f31bd27'
                            sys_user_role: {
                                id: '3e9f6959b3014deca7ed1004952c0462'
                                key: {
                                    name: 'x_2120492_athidhi.maintenance'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '2acc8d6dab564c809f3bdae13147549c'
                        key: {
                            name: 'x_2120492_athidhi_maintenance_request'
                            element: 'category'
                            value: 'hvac'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2b256e2e985c4fe38ce3ace5533c52c3'
                        key: {
                            name: 'x_2120492_athidhi_ai_interaction_log'
                            element: 'action_result'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '2b772be5f7f74384a5783c4ddf22c559'
                        key: {
                            name: 'x_2120492_athidhi_food_order'
                            element: 'status'
                            value: 'preparing'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2b9e799735974f1694cbfd066e5f1eef'
                        key: {
                            name: 'x_2120492_athidhi_room'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '2c539c02666943a491ce8dd2e38e1377'
                        key: {
                            sys_security_acl: '3fd23b86394846eda188461010faa27f'
                            sys_user_role: {
                                id: '240a492786cd43859dd397028582ac16'
                                key: {
                                    name: 'x_2120492_athidhi.receptionist'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '2c7ccbe541924febb7582679c5fa0675'
                        key: {
                            sys_security_acl: 'baa1409b34454e8d93e7b93b0c4cba48'
                            sys_user_role: {
                                id: 'b45ac46436c14974b223c8bff451f7e8'
                                key: {
                                    name: 'x_2120492_athidhi.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '2cfa3b2a98b64f9cb7bfd3abcccc75e2'
                        key: {
                            name: 'x_2120492_athidhi_reservation'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '2d105ec0ab54477786ccbad236938c81'
                        key: {
                            name: 'x_2120492_athidhi_incident'
                            element: 'priority'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '2d15cd5063d6407884b22b1dac4ca6ad'
                        key: {
                            name: 'x_2120492_athidhi_payment'
                            element: 'payment_method'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2da4255cc9b240ae8628e37021329e7a'
                        key: {
                            name: 'x_2120492_athidhi_guest'
                            element: 'state'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2e439eafd7c4446a835af0a19df36750'
                        key: {
                            name: 'x_2120492_athidhi_guest'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '2e79f5d48cb04bbca0c966b9f9e322ad'
                        key: {
                            name: 'x_2120492_athidhi_maintenance_request'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2f41dfe178c645419df0dd8c8c0a74cf'
                        key: {
                            name: 'x_2120492_athidhi_work_task'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2f819cb63e0b482a869e725cbf815739'
                        key: {
                            name: 'x_2120492_athidhi_guest'
                            element: 'identification_type'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '303bed01461147dd9aa95a0fb1ac1b38'
                        key: {
                            sys_security_acl: '080ef90c9e04455e8c42500356f14bb9'
                            sys_user_role: {
                                id: 'b45ac46436c14974b223c8bff451f7e8'
                                key: {
                                    name: 'x_2120492_athidhi.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '30de814757f843de8b93cbc52466c151'
                        key: {
                            sys_security_acl: '75fc729ec3fe49be906bacbd7965915e'
                            sys_user_role: {
                                id: 'bd9b587c1f9047609d32f4eea97e73bb'
                                key: {
                                    name: 'x_2120492_athidhi.restaurant'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '30f150cc99e042aca08bf8b8ba17c932'
                        key: {
                            name: 'x_2120492_athidhi_service_request_item'
                            element: 'quantity'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '310c07ed0ae34eccb3ccb56bebbe9f82'
                        key: {
                            name: 'x_2120492_athidhi_menu_item'
                            element: 'item_number'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '310f8030871a4b2eb09dbfc7f049f326'
                        key: {
                            name: 'x_2120492_athidhi_inventory_transaction'
                            element: 'reference_number'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '31a174404c3741a88c15f3398c815aa9'
                        key: {
                            name: 'x_2120492_athidhi_guest'
                            element: 'date_of_birth'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_number'
                        id: '31ab93b47f0d4da79ce9fd2617d15abb'
                        key: {
                            category: 'x_2120492_athidhi_inventory_reorder'
                            prefix: 'RDR'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '31fc4a42b0e1412a9a2ae31c9735a487'
                        key: {
                            name: 'x_2120492_athidhi_stay'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '324822d7c63f4665b3665afff972de0e'
                        key: {
                            name: 'x_2120492_athidhi_service_request'
                            element: 'request_type'
                            value: 'other'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '325200d867c841828e5ee93fe1c449bd'
                        key: {
                            name: 'x_2120492_athidhi_room'
                            element: 'room_number'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '326adc0957924b5e9563e09df1658536'
                        key: {
                            name: 'x_2120492_athidhi_maintenance_request'
                            element: 'priority'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '3297b72821424efb97ca461fa872bb98'
                        key: {
                            sys_security_acl: '0eb4b258ad5d486f8d9b3fb369a15762'
                            sys_user_role: {
                                id: '0e2c8b4a8bd0443fb576b6f6b6349fbe'
                                key: {
                                    name: 'x_2120492_athidhi.manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '329e324c52074364a705431db2ed1f12'
                        key: {
                            name: 'x_2120492_athidhi_housekeeping_task'
                            element: 'task_type'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '32a44320d44d48eba2d47fb048588944'
                        key: {
                            name: 'x_2120492_athidhi_amenity'
                            element: 'category'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '32bff977a1474e08885298764f2c2e32'
                        key: {
                            name: 'x_2120492_athidhi_staff_profile'
                            element: 'job_title'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '33421d8199d14f0d915a26109c39e785'
                        key: {
                            name: 'x_2120492_athidhi_room_type'
                            element: 'code'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '335858055a404e219a63540dae0f9d19'
                        key: {
                            name: 'x_2120492_athidhi_menu_item'
                            element: 'active'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '335cbf254143441e996bad7828100377'
                        key: {
                            sys_security_acl: '7ee86eb279eb4c58b44c9f3796cef921'
                            sys_user_role: {
                                id: '7a58b2b3dd1e4586ad7b6fb331fb8788'
                                key: {
                                    name: 'x_2120492_athidhi.guest'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '339bcf5f2a864ffa9f5fe9e9031981c9'
                        key: {
                            name: 'x_2120492_athidhi_incident'
                            element: 'state'
                            value: 'resolved'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '340afcbc6df64982be18d74fd6b944a4'
                        key: {
                            name: 'x_2120492_athidhi_room'
                            element: 'floor'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '344fd7548901449fa5763540ac7319b8'
                        key: {
                            sys_security_acl: 'f76b832f789a4de5a9d5548b5bd85294'
                            sys_user_role: {
                                id: '3e9f6959b3014deca7ed1004952c0462'
                                key: {
                                    name: 'x_2120492_athidhi.maintenance'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: '34817a5538a643c49fa4fa55242f7006'
                        key: {
                            sys_ui_action: '2e93ed3246734acf93813f2427a9b462'
                            sys_user_role: {
                                id: '240a492786cd43859dd397028582ac16'
                                key: {
                                    name: 'x_2120492_athidhi.receptionist'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '34a37822f1c94bd38022497c8227595c'
                        key: {
                            sys_security_acl: 'a23aecc072a14ce2826c346c87283316'
                            sys_user_role: {
                                id: '0e2c8b4a8bd0443fb576b6f6b6349fbe'
                                key: {
                                    name: 'x_2120492_athidhi.manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '34c4f51c951546d7b3002b7ac1e25247'
                        key: {
                            sys_security_acl: '3fd23b86394846eda188461010faa27f'
                            sys_user_role: {
                                id: 'b45ac46436c14974b223c8bff451f7e8'
                                key: {
                                    name: 'x_2120492_athidhi.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '34c989c9f4c74361bff7deb688871a3b'
                        key: {
                            name: 'x_2120492_athidhi_menu_item'
                            element: 'available'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '34f4c2445b5d4aa7be8bd4a02b7c2ff4'
                        key: {
                            name: 'x_2120492_athidhi_reservation'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3503e88c74a34d0cba517d6f9e9cc7a3'
                        key: {
                            name: 'x_2120492_athidhi_work_task'
                            element: 'task_number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '352565aabf3c42f3a3badea55666af7b'
                        key: {
                            name: 'x_2120492_athidhi_guest'
                            element: 'country'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3528b437f55a4c168f927eb41e393c1d'
                        key: {
                            name: 'x_2120492_athidhi_room'
                            element: 'occupancy_status'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '356cd6497fad4067a5aa644cc5fd6b52'
                        key: {
                            name: 'x_2120492_athidhi_payment'
                            element: 'payment_method'
                            value: 'upi'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '35b111c4e4744ca89d4d46fc7d91817e'
                        key: {
                            name: 'x_2120492_athidhi_inventory_transaction'
                            element: 'transaction_type'
                            value: 'waste'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '35ba2c9765a845079451e71258fe0193'
                        key: {
                            name: 'x_2120492_athidhi_guest'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '35ba68226df248a39bfacb140c86388b'
                        key: {
                            name: 'x_2120492_athidhi_room'
                            element: 'housekeeping_status'
                            value: 'in_progress'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '35f4c63162554743bd025c2ee4da0315'
                        key: {
                            name: 'x_2120492_athidhi_ai_interaction_log'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '361bf090042445ce841e0033b63eca7b'
                        key: {
                            name: 'x_2120492_athidhi_inventory_transaction'
                            element: 'reference_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3654ee4ec7514875bde9cefa06c6efa2'
                        key: {
                            name: 'x_2120492_athidhi_ai_interaction_log'
                            element: 'success'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '3670e4a18b074ca787fe9bfc2f6c98ad'
                        key: {
                            name: 'x_2120492_athidhi_service_request'
                            element: 'request_type'
                            value: 'concierge'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '36718df40ebe415dadac2005612fed7d'
                        key: {
                            name: 'x_2120492_athidhi_service_request'
                            element: 'request_type'
                            value: 'wake_up_call'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '368a8baef79b40e2b14f749d7418978b'
                        key: {
                            name: 'x_2120492_athidhi_service_catalog_item'
                            element: 'default_priority'
                        }
                    },
                    {
                        table: 'sys_number'
                        id: '36afcc1a79034b00bc90cebaafae7a3c'
                        key: {
                            category: 'x_2120492_athidhi_staff_profile'
                            prefix: 'STF'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '36bfa9da4d8d453fbca7bcc456b5b204'
                        key: {
                            sys_security_acl: '3b76bc85ada845d28eb33d5e267fc0b2'
                            sys_user_role: {
                                id: '7a58b2b3dd1e4586ad7b6fb331fb8788'
                                key: {
                                    name: 'x_2120492_athidhi.guest'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '37a5e4387ff9473a885fb4b137ae9ee6'
                        key: {
                            sys_security_acl: '43b91e08d376461db98b6eab6a2c550f'
                            sys_user_role: {
                                id: '3e9f6959b3014deca7ed1004952c0462'
                                key: {
                                    name: 'x_2120492_athidhi.maintenance'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '37e6a4370e204ccd8b2d746fdcd73aa8'
                        key: {
                            name: 'x_2120492_athidhi_incident'
                            element: 'category'
                            value: 'facility'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '3821fa92dd1141bfb23a1f0a09d4566d'
                        key: {
                            sys_security_acl: 'abf52eba48394e57bfc451c7fe577675'
                            sys_user_role: {
                                id: 'b45ac46436c14974b223c8bff451f7e8'
                                key: {
                                    name: 'x_2120492_athidhi.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3847e0028eed4cca86c5628d09808955'
                        key: {
                            name: 'x_2120492_athidhi_service_request'
                            element: 'requested_at'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '38d5542263ca4ae691cd43e4489e87d6'
                        key: {
                            name: 'x_2120492_athidhi_guest'
                            element: 'last_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '38d5c2cee44942bc9ce580fea48c4548'
                        key: {
                            name: 'x_2120492_athidhi_food_order'
                            element: 'order_number'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '3927a19dc1b04f7396d99d5f4d22a35a'
                        key: {
                            name: 'x_2120492_athidhi_maintenance_request'
                            element: 'status'
                            value: 'in_progress'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '392a018841bc40d980ffeef5b8967a61'
                        key: {
                            name: 'x_2120492_athidhi_menu_item'
                            element: 'item_number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '392ed54991334b7b89ec59b892c9318a'
                        key: {
                            name: 'x_2120492_athidhi_service_catalog_item'
                            element: 'default_priority'
                            value: 'low'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '3957617d279b455fbd4fa608efe63ce0'
                        key: {
                            name: 'x_2120492_athidhi_service_catalog_item'
                            element: 'category'
                            value: 'maintenance'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '3a32798d980f4ad89940d98649534d69'
                        key: {
                            name: 'x_2120492_athidhi_housekeeping_task'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3a6e727ca7854bf8ba0a6c2c7d996cbc'
                        key: {
                            name: 'x_2120492_athidhi_service_request'
                            element: 'completed_at'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '3a6e7a3a96de4396821e813fb73e6017'
                        key: {
                            name: 'x_2120492_athidhi_menu_item'
                            element: 'dietary_type'
                            value: 'jain'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '3aa7d4dd67804b3d839967418b27fae9'
                        key: {
                            name: 'x_2120492_athidhi_service_request'
                            element: 'status'
                            value: 'in_progress'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3abb6794905640208b5df08b96b85986'
                        key: {
                            name: 'x_2120492_athidhi_department'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '3ac3be8a2cba438faa04b55fad7e0d06'
                        key: {
                            sys_security_acl: 'c17ca1ad2d134b20b89e468a7051e620'
                            sys_user_role: {
                                id: 'b45ac46436c14974b223c8bff451f7e8'
                                key: {
                                    name: 'x_2120492_athidhi.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3ac6f031adb444a89d747f81b27aad88'
                        key: {
                            name: 'x_2120492_athidhi_guest_preference'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3ad8fbf87691406195fad57b4118c5e7'
                        key: {
                            name: 'x_2120492_athidhi_guest'
                            element: 'country'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '3b232d0a3aa74eada9ee28e0e0f8432b'
                        key: {
                            sys_security_acl: '04945a2703e047a3af6eb32947439c76'
                            sys_user_role: {
                                id: '0e2c8b4a8bd0443fb576b6f6b6349fbe'
                                key: {
                                    name: 'x_2120492_athidhi.manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3b5151a219ea4e308a8254195ad4355c'
                        key: {
                            name: 'x_2120492_athidhi_inventory_transaction'
                            element: 'quantity'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3b910f520ca64a73a0efd0fdcaed0d13'
                        key: {
                            name: 'x_2120492_athidhi_inventory_reorder'
                            element: 'requested_quantity'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3bec0a6416464931bcf3ba6fbb009c43'
                        key: {
                            name: 'x_2120492_athidhi_payment'
                            element: 'amount'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3bf4ba1516de4255b3f1d598aaf085aa'
                        key: {
                            name: 'x_2120492_athidhi_room_amenity'
                            element: 'room'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '3c001edf151140969e2f3c341ee96bf5'
                        key: {
                            sys_security_acl: '609eb0610d104566b7cce4cb86e93d1b'
                            sys_user_role: {
                                id: '240a492786cd43859dd397028582ac16'
                                key: {
                                    name: 'x_2120492_athidhi.receptionist'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '3c249609cf0342ca8d08a947408df16a'
                        key: {
                            sys_security_acl: '641e9ef191d54025b868632bb4a58198'
                            sys_user_role: {
                                id: '240a492786cd43859dd397028582ac16'
                                key: {
                                    name: 'x_2120492_athidhi.receptionist'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '3c29c735f7c14482a86d62a36b4f6540'
                        key: {
                            name: 'x_2120492_athidhi_menu_item'
                            element: 'category'
                            value: 'main_course'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '3c7f2b1e2cdc400f88c16796fd796996'
                        key: {
                            name: 'x_2120492_athidhi_room'
                            element: 'occupancy_status'
                            value: 'vacant'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '3c95b38f98604d8d82383e4d2dcd48b9'
                        key: {
                            name: 'x_2120492_athidhi_food_order'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '3c9e7ebfdbb144988803ccc3e2e8f309'
                        key: {
                            name: 'x_2120492_athidhi_menu_item'
                            element: 'category'
                            value: 'beverage'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '3cd459fb19a8487280302a11abb14e2f'
                        key: {
                            name: 'x_2120492_athidhi_housekeeping_task'
                            element: 'status'
                            value: 'completed'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3cd5fbc34a6d4a0c97160b4263f0ea52'
                        key: {
                            name: 'x_2120492_athidhi_housekeeping_task'
                            element: 'scheduled_start'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: '3ce02cf744f74d2d8b7ec0f3dd9d3e31'
                        key: {
                            sys_ui_action: 'c54163a3014147fb9843d46f01ddbdce'
                            sys_user_role: {
                                id: 'b45ac46436c14974b223c8bff451f7e8'
                                key: {
                                    name: 'x_2120492_athidhi.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3ce3251da55e495b894a97c790ff442e'
                        key: {
                            name: 'x_2120492_athidhi_food_order_item'
                            element: 'total_price'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '3d01e809d5eb4c3884344ac67bf802ae'
                        key: {
                            sys_security_acl: '7269ba59ec134588aa0762faa3d081a9'
                            sys_user_role: {
                                id: '0e2c8b4a8bd0443fb576b6f6b6349fbe'
                                key: {
                                    name: 'x_2120492_athidhi.manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_number'
                        id: '3d0f38b0565b4955a201a929604a2cc4'
                        key: {
                            category: 'x_2120492_athidhi_food_order'
                            prefix: 'FOD'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3d81194df7d34cf5ad7cb3c488a359a3'
                        key: {
                            name: 'x_2120492_athidhi_service_request'
                            element: 'charge'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3dbcd2777bf443f0b13ca988ffd5ac41'
                        key: {
                            name: 'x_2120492_athidhi_reservation'
                            element: 'guest'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3e0ead88bd474065ac490a5fb221a8c0'
                        key: {
                            name: 'x_2120492_athidhi_room_amenity'
                            element: 'active'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: '3e4ff292251c46b7877aac1f7e42e9b8'
                        key: {
                            sys_ui_action: '1d2f24ed96fc49f181f74e1365382666'
                            sys_user_role: {
                                id: '8f68f11dd010432ba80972aa8ac2b77d'
                                key: {
                                    name: 'x_2120492_athidhi.housekeeping'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '3e5f3f82c279403b8676afd23555b954'
                        key: {
                            sys_security_acl: 'df4a5c6bc84641ec9e0f122dcbb9a52a'
                            sys_user_role: {
                                id: '240a492786cd43859dd397028582ac16'
                                key: {
                                    name: 'x_2120492_athidhi.receptionist'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '3e612b49da9d4e9babf509a684b4ae1f'
                        key: {
                            name: 'x_2120492_athidhi_service_request'
                            element: 'status'
                            value: 'on_hold'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '3e6f3bd3b2144e738580923aa63d3938'
                        key: {
                            sys_security_acl: 'a23aecc072a14ce2826c346c87283316'
                            sys_user_role: {
                                id: 'b45ac46436c14974b223c8bff451f7e8'
                                key: {
                                    name: 'x_2120492_athidhi.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '3e80dd41eb00415ca46159320d60dcec'
                        key: {
                            name: 'x_2120492_athidhi_room_type'
                            element: 'bed_type'
                            value: 'suite'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: '3e9f6959b3014deca7ed1004952c0462'
                        key: {
                            name: 'x_2120492_athidhi.maintenance'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3ebf657a4ed54c06940592b0191e1e51'
                        key: {
                            name: 'x_2120492_athidhi_guest'
                            element: 'email'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '3ed1cf05b3ef4803872d9431567346fd'
                        key: {
                            name: 'x_2120492_athidhi_housekeeping_task'
                            element: 'status'
                            value: 'pending'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3f3a817ef7184a8f90a6853123d68a58'
                        key: {
                            name: 'x_2120492_athidhi_menu_item'
                            element: 'name'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '3f3d6b17286246559c9f31a85edb9b39'
                        key: {
                            name: 'x_2120492_athidhi_department'
                            element: 'name'
                            value: 'maintenance'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '3f553342387f47e88c96645500096c9f'
                        key: {
                            name: 'x_2120492_athidhi_incident'
                            element: 'state'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '3f5d0bb7d2164c18945253fbbbb9f39d'
                        key: {
                            name: 'x_2120492_athidhi_work_task'
                            element: 'priority'
                            value: 'high'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '40a79f3e66e640c181eebed4bb995b79'
                        key: {
                            name: 'x_2120492_athidhi_reservation'
                            element: 'confirmation_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4108e4c9b83f46989c7da2b47ecad601'
                        key: {
                            name: 'x_2120492_athidhi_room_amenity'
                            element: 'room'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4134e13757014c6cb5d3f50d7d0ef684'
                        key: {
                            name: 'x_2120492_athidhi_stay'
                            element: 'adults'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '41903fbcc07d4abe931301e694b8e737'
                        key: {
                            name: 'x_2120492_athidhi_ai_interaction_log'
                            element: 'logged_at'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '41f098ab417a49b8b49399894a830913'
                        key: {
                            sys_security_acl: '3c36adabd1ff4ef282011aee65e4e931'
                            sys_user_role: {
                                id: 'bd9b587c1f9047609d32f4eea97e73bb'
                                key: {
                                    name: 'x_2120492_athidhi.restaurant'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '41f19ad61ceb4a89bce33c008ed9c2be'
                        key: {
                            sys_security_acl: '98e0dfa8781a459f95882265bf684ec4'
                            sys_user_role: {
                                id: '240a492786cd43859dd397028582ac16'
                                key: {
                                    name: 'x_2120492_athidhi.receptionist'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '41fc394d56e3426a9cf15dafa28a6c49'
                        key: {
                            name: 'x_2120492_athidhi_inventory_transaction'
                            element: 'notes'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4219227aea824f7094cdef4ba0b2e087'
                        key: {
                            name: 'x_2120492_athidhi_housekeeping_task'
                            element: 'stay'
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: '426f790b3bf94f30a573c4bae022bb02'
                        key: {
                            sys_ui_action: '8260643261ba45c8a0a645a06b7b2400'
                            sys_user_role: {
                                id: 'b45ac46436c14974b223c8bff451f7e8'
                                key: {
                                    name: 'x_2120492_athidhi.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4279c81a4119495eb82b616755b41c82'
                        key: {
                            name: 'x_2120492_athidhi_work_task'
                            element: 'assigned_to'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '429fea79d7d14e4891a1ee6f3bc0bfde'
                        key: {
                            name: 'x_2120492_athidhi_ai_interaction_log'
                            element: 'request_category'
                            value: 'stay'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '42bb8838e535495d888f6f021f44a78d'
                        key: {
                            sys_security_acl: '98adc9bc1b244bc4b1e1e005d192257d'
                            sys_user_role: {
                                id: '3e9f6959b3014deca7ed1004952c0462'
                                key: {
                                    name: 'x_2120492_athidhi.maintenance'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '42ffa5340091422a820f07d1bdd695dc'
                        key: {
                            name: 'x_2120492_athidhi_staff_profile'
                            element: 'phone'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4300cf7dae164f029deff2d624251e84'
                        key: {
                            name: 'x_2120492_athidhi_service_catalog_item'
                            element: 'estimated_minutes'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4312958c0fda4460bd6ab5583a97132b'
                        key: {
                            name: 'x_2120492_athidhi_ai_interaction_log'
                            element: 'requested_action'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '435a84b9b0f74a65a2f151d56a950145'
                        key: {
                            name: 'x_2120492_athidhi_room_type'
                            element: 'bed_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '437ee865517e4592be717a27476844eb'
                        key: {
                            sys_security_acl: 'b82ced06467c407ab294019d282c7a54'
                            sys_user_role: {
                                id: '7a58b2b3dd1e4586ad7b6fb331fb8788'
                                key: {
                                    name: 'x_2120492_athidhi.guest'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '43ccc97c5bfc40b19261551bde38e308'
                        key: {
                            name: 'x_2120492_athidhi_work_task'
                            element: 'short_description'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '43ce1f178dd2479aaa857f106f87d7ef'
                        key: {
                            name: 'x_2120492_athidhi_guest'
                            element: 'city'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '43e434b3934b41e3b885ce5b03d6a1de'
                        key: {
                            name: 'x_2120492_athidhi_service_request'
                            element: 'request_type'
                            value: 'maintenance'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '43ea963e1e3c40418ef4d17151b0a986'
                        key: {
                            name: 'x_2120492_athidhi_ai_interaction_log'
                            element: 'action_result'
                            value: 'SYSTEM_ERROR'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '440a831fb4bf49988e21fbab9325eae3'
                        key: {
                            name: 'x_2120492_athidhi_menu'
                            element: 'menu_type'
                            value: 'all_day'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '440e249bfcb54e869d375cc1b85d054a'
                        key: {
                            name: 'x_2120492_athidhi_inventory_item'
                            element: 'unit_cost'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '44554c0503f1405697faf5fe7521c036'
                        key: {
                            name: 'x_2120492_athidhi_room'
                            element: 'room_type'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4455c38c73f847b98415400f23726cad'
                        key: {
                            name: 'x_2120492_athidhi_food_order_item'
                            element: 'menu_item'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '448ac640e4c642b29116d069e08c3f20'
                        key: {
                            sys_security_acl: '98adc9bc1b244bc4b1e1e005d192257d'
                            sys_user_role: {
                                id: 'bd9b587c1f9047609d32f4eea97e73bb'
                                key: {
                                    name: 'x_2120492_athidhi.restaurant'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '44ba589451224a35a3886bce1faea47d'
                        key: {
                            name: 'x_2120492_athidhi_room_amenity'
                            element: 'notes'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '44c7186de47a43ff94ca18313376e780'
                        key: {
                            sys_security_acl: '89302a9c479b4cfdbf5ef4ccb17ff38e'
                            sys_user_role: {
                                id: '240a492786cd43859dd397028582ac16'
                                key: {
                                    name: 'x_2120492_athidhi.receptionist'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '455b34bd01eb4e8b9283b26b0ea82e63'
                        key: {
                            name: 'x_2120492_athidhi_housekeeping_task'
                            element: 'inspection_required'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '456f4fcd73864f64885a9ea2f2873ceb'
                        key: {
                            name: 'x_2120492_athidhi_service_request'
                            element: 'request_type'
                            value: 'housekeeping'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '45920315b907441087dcb85f5f9a8f65'
                        key: {
                            name: 'x_2120492_athidhi_reservation'
                            element: 'children'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '45943ac58af14c7e88ec91d7a6d908dc'
                        key: {
                            sys_security_acl: '348788822a794d82b190d9432e0336e6'
                            sys_user_role: {
                                id: 'b45ac46436c14974b223c8bff451f7e8'
                                key: {
                                    name: 'x_2120492_athidhi.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '4596310bc8304000af770495602172ac'
                        key: {
                            sys_security_acl: '36ccf90d87a844ef90b2966b93f1da4a'
                            sys_user_role: {
                                id: '240a492786cd43859dd397028582ac16'
                                key: {
                                    name: 'x_2120492_athidhi.receptionist'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '46103eac90da420e9a802b5ae2c206cd'
                        key: {
                            sys_security_acl: '143a3d7d831b4b85b200d24da6f31cb5'
                            sys_user_role: {
                                id: '240a492786cd43859dd397028582ac16'
                                key: {
                                    name: 'x_2120492_athidhi.receptionist'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '46157c640d364fd1a27f69f8eb07e64d'
                        key: {
                            name: 'x_2120492_athidhi_incident'
                            element: 'room'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '466d3ce0ca6841f1a2c0cb8fad17ebff'
                        key: {
                            sys_security_acl: 'b01deb7b8ee94b0e8459240dfa0d7881'
                            sys_user_role: {
                                id: '7a58b2b3dd1e4586ad7b6fb331fb8788'
                                key: {
                                    name: 'x_2120492_athidhi.guest'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '46a891cdfeb04c8aa92eda057988bbb6'
                        key: {
                            name: 'x_2120492_athidhi_work_task'
                            element: 'state'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '46ab10f0f112443cb6b693da6c91ecfd'
                        key: {
                            sys_security_acl: 'bb8e8b01663d405893285ed33969b022'
                            sys_user_role: {
                                id: '0e2c8b4a8bd0443fb576b6f6b6349fbe'
                                key: {
                                    name: 'x_2120492_athidhi.manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '46c78865bda24a6aaf9919868efe4e56'
                        key: {
                            name: 'x_2120492_athidhi_restaurant'
                            element: 'name'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '46f02242cc5440ef86f6365616acf5e6'
                        key: {
                            sys_security_acl: '625bfd1547b44ba6a011585fc8cc2d5a'
                            sys_user_role: {
                                id: '3e9f6959b3014deca7ed1004952c0462'
                                key: {
                                    name: 'x_2120492_athidhi.maintenance'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: '4757310ee7e54267a62f52f4cba26fe5'
                        key: {
                            sys_ui_action: '591e5f4dcbdb4cabb4323631fed8f9a9'
                            sys_user_role: {
                                id: 'bd9b587c1f9047609d32f4eea97e73bb'
                                key: {
                                    name: 'x_2120492_athidhi.restaurant'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '47749f8b795b4916a7562220d1d5984b'
                        key: {
                            name: 'x_2120492_athidhi_maintenance_request'
                            element: 'category'
                            value: 'network'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4796cd1ab5e648de86dcd9c0e05edbd7'
                        key: {
                            name: 'x_2120492_athidhi_department'
                            element: 'code'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '47a45c8dd0774696bd9b03997c19dd17'
                        key: {
                            sys_security_acl: '50e34967cef84b2daa571097a9999d3d'
                            sys_user_role: {
                                id: 'b45ac46436c14974b223c8bff451f7e8'
                                key: {
                                    name: 'x_2120492_athidhi.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '47b2125b87f14990b856963fe9a4cebe'
                        key: {
                            name: 'x_2120492_athidhi_work_task'
                            element: 'assigned_to'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '48048568f8664eb89abed6f824177a38'
                        key: {
                            sys_security_acl: 'da44235fbac4497884218531468b496e'
                            sys_user_role: {
                                id: 'bd9b587c1f9047609d32f4eea97e73bb'
                                key: {
                                    name: 'x_2120492_athidhi.restaurant'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '48121bb8211b40128fbd7ec20d3b82cc'
                        key: {
                            name: 'x_2120492_athidhi_guest'
                            element: 'nationality'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '48123ac92623465aa225f7dd05c4f4d0'
                        key: {
                            name: 'x_2120492_athidhi_service_catalog_item'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '4820b5c8f81a4d3299b6fb09e746856b'
                        key: {
                            sys_security_acl: '21f02e1265084acba8a231b1153d60c4'
                            sys_user_role: {
                                id: '240a492786cd43859dd397028582ac16'
                                key: {
                                    name: 'x_2120492_athidhi.receptionist'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '48465306811849e69b639a5153fd15cc'
                        key: {
                            name: 'x_2120492_athidhi_service_catalog_item'
                            element: 'category'
                            value: 'housekeeping'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '48a7e6e8519147f4b40c70bb2bfd0305'
                        key: {
                            name: 'x_2120492_athidhi_housekeeping_task'
                            element: 'status'
                            value: 'cancelled'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '48c0c29a61704cd7bf3e97f3f70362b0'
                        key: {
                            name: 'x_2120492_athidhi_reservation'
                            element: 'booking_source'
                            value: 'corporate'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '48d08622c05848829f3fd863ac4e228a'
                        key: {
                            sys_security_acl: '75fc729ec3fe49be906bacbd7965915e'
                            sys_user_role: {
                                id: '0e2c8b4a8bd0443fb576b6f6b6349fbe'
                                key: {
                                    name: 'x_2120492_athidhi.manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '48d6455afe3841ae9b29910edf081732'
                        key: {
                            sys_security_acl: '7269ba59ec134588aa0762faa3d081a9'
                            sys_user_role: {
                                id: '8f68f11dd010432ba80972aa8ac2b77d'
                                key: {
                                    name: 'x_2120492_athidhi.housekeeping'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4910aab629d04fdabe2df0b125ec153b'
                        key: {
                            name: 'x_2120492_athidhi_work_task'
                            element: 'opened_at'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '49479c97949842edb5d76794d037e89d'
                        key: {
                            sys_security_acl: '1e525e09ab9942ec84acc9c1e6c7eb80'
                            sys_user_role: {
                                id: '0e2c8b4a8bd0443fb576b6f6b6349fbe'
                                key: {
                                    name: 'x_2120492_athidhi.manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '4980385d98ee478ba3c004eead7a28bd'
                        key: {
                            sys_security_acl: '609eb0610d104566b7cce4cb86e93d1b'
                            sys_user_role: {
                                id: '3e9f6959b3014deca7ed1004952c0462'
                                key: {
                                    name: 'x_2120492_athidhi.maintenance'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '49a06d6f682349c786e4dc05816dba8c'
                        key: {
                            sys_security_acl: '6febd0dd78b84bc9a86cb405a9ad6607'
                            sys_user_role: {
                                id: '240a492786cd43859dd397028582ac16'
                                key: {
                                    name: 'x_2120492_athidhi.receptionist'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '49c33adab4d2489fb7dbfa3deda7a5ff'
                        key: {
                            name: 'x_2120492_athidhi_service_catalog_item'
                            element: 'category'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '4a64b28b9a5f44bba62de4fa1eda912a'
                        key: {
                            sys_security_acl: '31f27f36e7f344eb9d23558e3250c542'
                            sys_user_role: {
                                id: '0e2c8b4a8bd0443fb576b6f6b6349fbe'
                                key: {
                                    name: 'x_2120492_athidhi.manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4b37ccc7122c439abbac99bbe59d9fa6'
                        key: {
                            name: 'x_2120492_athidhi_housekeeping_task'
                            element: 'task_number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '4b590b8262cb4116843f44e9f6e0084d'
                        key: {
                            name: 'x_2120492_athidhi_payment'
                            element: 'payment_method'
                            value: 'online_gateway'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4b7cd0b20c234bfc91964909e93d611a'
                        key: {
                            name: 'x_2120492_athidhi_food_order'
                            element: 'stay'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '4ba2a2346b8749898fe684aee617277d'
                        key: {
                            sys_security_acl: 'ea40dd00d8304832acefe3166b87c959'
                            sys_user_role: {
                                id: 'b45ac46436c14974b223c8bff451f7e8'
                                key: {
                                    name: 'x_2120492_athidhi.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4bcd96ca1c644693a4286a90d34e68cc'
                        key: {
                            name: 'x_2120492_athidhi_food_order'
                            element: 'room'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4c0584f7587946f393eca104027711dd'
                        key: {
                            name: 'x_2120492_athidhi_inventory_reorder'
                            element: 'received_at'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4c1232f88d364272b769bec30dec3181'
                        key: {
                            name: 'x_2120492_athidhi_maintenance_request'
                            element: 'room'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4c23085672c04e5eb0ac191f19bd997f'
                        key: {
                            name: 'x_2120492_athidhi_food_order'
                            element: 'ordered_at'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '4c2bb1bbbec349648120893bd7b54edf'
                        key: {
                            name: 'x_2120492_athidhi_work_task'
                            element: 'priority'
                            value: 'medium'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '4c6a0088ba344f8dbf3e2447f393b051'
                        key: {
                            name: 'x_2120492_athidhi_service_catalog_item'
                            element: 'default_priority'
                            value: 'high'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '4c6b055ee361433d89e0c2aa34fc9250'
                        key: {
                            sys_security_acl: '718e0b6d9dbc45c0bc99fdca55ab12fc'
                            sys_user_role: {
                                id: 'b45ac46436c14974b223c8bff451f7e8'
                                key: {
                                    name: 'x_2120492_athidhi.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '4cad6b59204146a699d2b363aa43b429'
                        key: {
                            name: 'x_2120492_athidhi_inventory_item'
                            element: 'category'
                            value: 'cleaning'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4cba24c01152424e9384b96ea53258fb'
                        key: {
                            name: 'x_2120492_athidhi_inventory_item'
                            element: 'item_number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4cd1862ffc2d47f4b995c2b221652c0a'
                        key: {
                            name: 'x_2120492_athidhi_ai_interaction_log'
                            element: 'user_role'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4d15f98ecca248589c6095e815502fc8'
                        key: {
                            name: 'x_2120492_athidhi_incident'
                            element: 'short_description'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '4d2188d4069547e29a99afd12fc0e329'
                        key: {
                            sys_security_acl: '29522196288346fa8daed8d46faddaa6'
                            sys_user_role: {
                                id: 'b45ac46436c14974b223c8bff451f7e8'
                                key: {
                                    name: 'x_2120492_athidhi.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '4d23d335e44e46f683b78fa3fab69991'
                        key: {
                            sys_security_acl: '2c6e47a71b3e493c9026c6c4755bf1f9'
                            sys_user_role: {
                                id: '7a58b2b3dd1e4586ad7b6fb331fb8788'
                                key: {
                                    name: 'x_2120492_athidhi.guest'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '4d3d9f9d5a8442c39676103028b20e54'
                        key: {
                            sys_security_acl: '8baa71144e21493da6307acd80619259'
                            sys_user_role: {
                                id: '7a58b2b3dd1e4586ad7b6fb331fb8788'
                                key: {
                                    name: 'x_2120492_athidhi.guest'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '4d5bff0e1e94424bbaef00529fd8569b'
                        key: {
                            name: 'x_2120492_athidhi_work_task'
                            element: 'state'
                            value: 'completed'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4d6654dd368f466fbd55fc2eb76094a4'
                        key: {
                            name: 'x_2120492_athidhi_ai_interaction_log'
                            element: 'execution_duration_ms'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: '4d7f974e80b14c8f801939662516d00f'
                        key: {
                            sys_ui_action: '8765fdf58afd4e07b0a75b90d3c5dabb'
                            sys_user_role: {
                                id: '8f68f11dd010432ba80972aa8ac2b77d'
                                key: {
                                    name: 'x_2120492_athidhi.housekeeping'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: '4d8ec1cfb924479e910061ff82b02460'
                        key: {
                            sys_ui_action: 'c54163a3014147fb9843d46f01ddbdce'
                            sys_user_role: {
                                id: '0e2c8b4a8bd0443fb576b6f6b6349fbe'
                                key: {
                                    name: 'x_2120492_athidhi.manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4da49c2a0e7c4f229a6bd9807319dbf3'
                        key: {
                            name: 'x_2120492_athidhi_menu'
                            element: 'name'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4dbbf512b93c46bbbaad567964023be0'
                        key: {
                            name: 'x_2120492_athidhi_maintenance_request'
                            element: 'service_request'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4dcd87888b9c44c2ba96d2e1f3bbe3c3'
                        key: {
                            name: 'x_2120492_athidhi_service_request'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '4e12c14c7d0542368e9564fd8400a2c9'
                        key: {
                            sys_security_acl: 'bb8e8b01663d405893285ed33969b022'
                            sys_user_role: {
                                id: 'b45ac46436c14974b223c8bff451f7e8'
                                key: {
                                    name: 'x_2120492_athidhi.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '4e258c2ddf7b47afa75f989a3595678a'
                        key: {
                            name: 'x_2120492_athidhi_maintenance_request'
                            element: 'priority'
                            value: 'critical'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '4e9d91dcb876408c9f3d58d627150f71'
                        key: {
                            sys_security_acl: 'fe596eb42378451484cc9491ed74100a'
                            sys_user_role: {
                                id: '0e2c8b4a8bd0443fb576b6f6b6349fbe'
                                key: {
                                    name: 'x_2120492_athidhi.manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: '4eb83556f12847968f5ac2e733969ce6'
                        key: {
                            sys_ui_action: '920c7b105c26460d8f97c4d294122477'
                            sys_user_role: {
                                id: 'bd9b587c1f9047609d32f4eea97e73bb'
                                key: {
                                    name: 'x_2120492_athidhi.restaurant'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4ed413f1b5c74cb985a18af3b74946f2'
                        key: {
                            name: 'x_2120492_athidhi_service_request'
                            element: 'assigned_to'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '4f1bdcb2b93147f987576beb873d3d0b'
                        key: {
                            name: 'x_2120492_athidhi_incident'
                            element: 'state'
                            value: 'new'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '4f50097155c24daa85e4de3153aa3656'
                        key: {
                            sys_security_acl: '125901a8a1004a6c8f617ab1d9131f2a'
                            sys_user_role: {
                                id: 'b45ac46436c14974b223c8bff451f7e8'
                                key: {
                                    name: 'x_2120492_athidhi.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '4f6c802afff64e51ac8e70e6efe62e0c'
                        key: {
                            name: 'x_2120492_athidhi_incident'
                            element: 'priority'
                            value: 'high'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '4fb2ae260f394c19ac6f3dbbd76990d7'
                        key: {
                            sys_security_acl: '6febd0dd78b84bc9a86cb405a9ad6607'
                            sys_user_role: {
                                id: 'b45ac46436c14974b223c8bff451f7e8'
                                key: {
                                    name: 'x_2120492_athidhi.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4fc2f91d4dc84f739062b812c50ffbd5'
                        key: {
                            name: 'x_2120492_athidhi_guest'
                            element: 'first_name'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4fff08edd2934926b6b6556a0e3848e1'
                        key: {
                            name: 'x_2120492_athidhi_department'
                            element: 'name'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '500cb9068b9848ecbe50d0ada7211775'
                        key: {
                            sys_security_acl: 'e59765aac1f7490db19402f680d5928d'
                            sys_user_role: {
                                id: 'bd9b587c1f9047609d32f4eea97e73bb'
                                key: {
                                    name: 'x_2120492_athidhi.restaurant'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '5020a6901d5d4854813d1904edb7dda6'
                        key: {
                            sys_security_acl: 'b0198b8b8c354eb28f507e8204bf781b'
                            sys_user_role: {
                                id: 'b45ac46436c14974b223c8bff451f7e8'
                                key: {
                                    name: 'x_2120492_athidhi.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5030f2b58fe045a4b03ddc02d39fc51b'
                        key: {
                            name: 'x_2120492_athidhi_inventory_reorder'
                            element: 'notes'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '503f3f69486340f39f5609a42a89f56a'
                        key: {
                            name: 'x_2120492_athidhi_work_task'
                            element: 'task_type'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '50523da10b194b009e17a83e283bf4b0'
                        key: {
                            sys_security_acl: '787aa58f789a412ca81e624277ad99f3'
                            sys_user_role: {
                                id: '240a492786cd43859dd397028582ac16'
                                key: {
                                    name: 'x_2120492_athidhi.receptionist'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: '50567ece596d404c83a23b114cc73a3b'
                        key: {
                            sys_ui_action: 'b744cac0b9da42d7803a69b97eb368f9'
                            sys_user_role: {
                                id: '0e2c8b4a8bd0443fb576b6f6b6349fbe'
                                key: {
                                    name: 'x_2120492_athidhi.manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '506c14d819384a01bfddc5c4fd56d34e'
                        key: {
                            name: 'x_2120492_athidhi_inventory_transaction'
                            element: 'quantity'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '50750083cae24dd9b70d65e85fbebbb9'
                        key: {
                            name: 'x_2120492_athidhi_room_type'
                            element: 'capacity'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '5089c8776fd142d8ab72a39996cbbb53'
                        key: {
                            name: 'x_2120492_athidhi_food_order'
                            element: 'order_type'
                            value: 'dine_in'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '50aaef545c664e4eb72b3805cde21bdb'
                        key: {
                            sys_security_acl: 'c17ca1ad2d134b20b89e468a7051e620'
                            sys_user_role: {
                                id: '0e2c8b4a8bd0443fb576b6f6b6349fbe'
                                key: {
                                    name: 'x_2120492_athidhi.manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '50c3c7a07ad145dd863da93c2ade8e26'
                        key: {
                            name: 'x_2120492_athidhi_service_request'
                            element: 'request_number'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '50dffc2ee09946a8885076f1b0811296'
                        key: {
                            sys_security_acl: '40956c897f3e4f44863dad8bc11d562c'
                            sys_user_role: {
                                id: 'b45ac46436c14974b223c8bff451f7e8'
                                key: {
                                    name: 'x_2120492_athidhi.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '50e0aea722094d468fa33a8c40c7af45'
                        key: {
                            name: 'x_2120492_athidhi_food_order_item'
                        }
                    },
                    {
                        table: 'sys_number'
                        id: '51156c80542c4b7eae314de84e0b6a5b'
                        key: {
                            category: 'x_2120492_athidhi_work_task'
                            prefix: 'TSK'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '511a8bf2d8404f099a6ea223f27cfa0f'
                        key: {
                            name: 'x_2120492_athidhi_menu_item'
                            element: 'category'
                            value: 'snack'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '518d59aef3d24f968d576aa37ee6cb0c'
                        key: {
                            name: 'x_2120492_athidhi_guest'
                            element: 'guest_number'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '51a9f976417a4b9cb12695b60e52e672'
                        key: {
                            name: 'x_2120492_athidhi_inventory_reorder'
                            element: 'reorder_number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '51b570af8dad4031b28299ad509fc0b7'
                        key: {
                            name: 'x_2120492_athidhi_stay'
                            element: 'special_notes'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '51e85305f4074d0fbff9edcda6e7c041'
                        key: {
                            name: 'x_2120492_athidhi_menu_item'
                            element: 'description'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '525cfcbe7e0644d382ab5338eaf7a5d9'
                        key: {
                            name: 'x_2120492_athidhi_ai_interaction_log'
                            element: 'provider'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '52659aec932848e28fae675e00e04474'
                        key: {
                            name: 'x_2120492_athidhi_guest'
                            element: 'active'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '526d26e385f04167a373f6b6f584c42f'
                        key: {
                            name: 'x_2120492_athidhi_inventory_item'
                            element: 'category'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '52ae4da15190434d9a30c73adf63e0b4'
                        key: {
                            name: 'x_2120492_athidhi_inventory_transaction'
                            element: 'performed_by'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '52e559991a93456387d6712120e5b059'
                        key: {
                            sys_security_acl: '9ed84c72827e4148a2a00ff7c74ff1f1'
                            sys_user_role: {
                                id: '0e2c8b4a8bd0443fb576b6f6b6349fbe'
                                key: {
                                    name: 'x_2120492_athidhi.manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '532928318cf342fdbbcdc8b83ab217c2'
                        key: {
                            name: 'x_2120492_athidhi_department'
                            element: 'name'
                            value: 'concierge'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '534366d5a62040789d1ce715a7b224b0'
                        key: {
                            name: 'x_2120492_athidhi_food_order_item'
                            element: 'quantity'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '53ae50dba6c24543bdfcbc92b097c78d'
                        key: {
                            name: 'x_2120492_athidhi_stay'
                            element: 'stay_number'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '53c2ca37bd7c4ecb839bbc035590b8bf'
                        key: {
                            sys_security_acl: 'e59765aac1f7490db19402f680d5928d'
                            sys_user_role: {
                                id: '0e2c8b4a8bd0443fb576b6f6b6349fbe'
                                key: {
                                    name: 'x_2120492_athidhi.manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '5426f48d9863447ab7e1334891f74657'
                        key: {
                            sys_security_acl: '78b24b1238da4b4c8c6a11617bb92b14'
                            sys_user_role: {
                                id: '0e2c8b4a8bd0443fb576b6f6b6349fbe'
                                key: {
                                    name: 'x_2120492_athidhi.manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '54429640ca8f4a3fb4eaac007775a423'
                        key: {
                            name: 'x_2120492_athidhi_reservation'
                            element: 'booking_source'
                            value: 'website'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '545ed0efa93b4b30a0fce01deb2c157b'
                        key: {
                            sys_security_acl: '0377b79ce54741109fa53c795328fae3'
                            sys_user_role: {
                                id: 'b45ac46436c14974b223c8bff451f7e8'
                                key: {
                                    name: 'x_2120492_athidhi.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '54a9225200594280ac07fa91c8d412ef'
                        key: {
                            sys_security_acl: '9b0e2c64920e4a9999336b1f814b982f'
                            sys_user_role: {
                                id: '0e2c8b4a8bd0443fb576b6f6b6349fbe'
                                key: {
                                    name: 'x_2120492_athidhi.manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '54afa252ead84a93a25193d18efd2bd8'
                        key: {
                            name: 'x_2120492_athidhi_reservation'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '54bced6253b64426bd9835f8e9955a4a'
                        key: {
                            name: 'x_2120492_athidhi_ai_interaction_log'
                            element: 'action_result'
                            value: 'TIMEOUT'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '55027bf5d14d4d7f964319fffebb2891'
                        key: {
                            sys_security_acl: 'ce0d69e096c44fada29623828427b611'
                            sys_user_role: {
                                id: 'b45ac46436c14974b223c8bff451f7e8'
                                key: {
                                    name: 'x_2120492_athidhi.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '552cdbce65fb4a2a9017a804a6f6422b'
                        key: {
                            name: 'x_2120492_athidhi_maintenance_request'
                            element: 'description'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '55a6393a506648fdaccac7c4dfa5b47e'
                        key: {
                            name: 'x_2120492_athidhi_stay'
                            element: 'adults'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '56afac36b7e14ae28b0b3d0552c420a0'
                        key: {
                            name: 'x_2120492_athidhi_inventory_transaction'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '56d0599b29804d7eb90a3c834e418c32'
                        key: {
                            name: 'x_2120492_athidhi_department'
                            element: 'name'
                            value: 'restaurant'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '573fa52aaa554d7494ee74b87add6702'
                        key: {
                            name: 'x_2120492_athidhi_ai_interaction_log'
                            element: 'requested_action'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '577ee8b2292d416cbc8b8865a3187ecd'
                        key: {
                            sys_security_acl: 'ebfa9d8ac35c4c00afa988762453dc36'
                            sys_user_role: {
                                id: 'bd9b587c1f9047609d32f4eea97e73bb'
                                key: {
                                    name: 'x_2120492_athidhi.restaurant'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '57efcb77ae50420dad719dac664f93f8'
                        key: {
                            name: 'x_2120492_athidhi_inventory_reorder'
                            element: 'received_at'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '57f01547d3a74b41b3b1bd22e95f01e5'
                        key: {
                            sys_security_acl: 'f76b832f789a4de5a9d5548b5bd85294'
                            sys_user_role: {
                                id: '8f68f11dd010432ba80972aa8ac2b77d'
                                key: {
                                    name: 'x_2120492_athidhi.housekeeping'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '581e543f5ffb4b0886cfe49936b091e5'
                        key: {
                            name: 'x_2120492_athidhi_incident'
                            element: 'resolved_at'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '584d2eaadce84e6daa61796e8ec7472e'
                        key: {
                            name: 'x_2120492_athidhi_amenity'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '590843b3a31b444290f8b7d76e08e525'
                        key: {
                            sys_security_acl: 'a6d4e9871646453c9ce294d090e723df'
                            sys_user_role: {
                                id: 'b45ac46436c14974b223c8bff451f7e8'
                                key: {
                                    name: 'x_2120492_athidhi.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5925f587c65a40ebad57b775c9db2087'
                        key: {
                            name: 'x_2120492_athidhi_menu'
                            element: 'menu_type'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5949c7d866074911add6e9260ff8d931'
                        key: {
                            name: 'x_2120492_athidhi_guest_preference'
                            element: 'active'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '59a1b44760534184a88fa4f446b9c2c6'
                        key: {
                            name: 'x_2120492_athidhi_ai_interaction_log'
                            element: 'error_category'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '59e1d13ed78a405f98bc63db0710ca3f'
                        key: {
                            name: 'x_2120492_athidhi_menu_item'
                            element: 'price'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '59fa221990304751a6ee54fa2e55a359'
                        key: {
                            name: 'x_2120492_athidhi_room'
                            element: 'floor'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '5a1b2a0d995c470283d8172967bfe7c7'
                        key: {
                            name: 'x_2120492_athidhi_reservation'
                            element: 'payment_status'
                            value: 'partially_paid'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5a1f223acb554b34ba451f33fbe5f328'
                        key: {
                            name: 'x_2120492_athidhi_payment'
                            element: 'reservation'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '5a32419c1d8343c6934d8ec1f14a7e7c'
                        key: {
                            sys_security_acl: '143a3d7d831b4b85b200d24da6f31cb5'
                            sys_user_role: {
                                id: 'b45ac46436c14974b223c8bff451f7e8'
                                key: {
                                    name: 'x_2120492_athidhi.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '5a4d54b98f904192a8d5ae43dac848fc'
                        key: {
                            name: 'x_2120492_athidhi_inventory_reorder'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '5a4fe9e78eed4da881eed48ea4d10c81'
                        key: {
                            name: 'x_2120492_athidhi_inventory_reorder'
                            element: 'status'
                            value: 'ordered'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5ab2307e6bd14ce38c68906b590778fb'
                        key: {
                            name: 'x_2120492_athidhi_housekeeping_task'
                            element: 'completed_at'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5ab4902ed6fc4c4c9fd24d5b3693afb3'
                        key: {
                            name: 'x_2120492_athidhi_service_catalog_item'
                            element: 'category'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '5ac189f09aff428786427019707dc8d6'
                        key: {
                            sys_security_acl: 'f6716048cfd444c4b696a8a0853ff663'
                            sys_user_role: {
                                id: '0e2c8b4a8bd0443fb576b6f6b6349fbe'
                                key: {
                                    name: 'x_2120492_athidhi.manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5ac733f92a554ea8ad846004f4efb745'
                        key: {
                            name: 'x_2120492_athidhi_ai_interaction_log'
                            element: 'success'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5accb52055ca4e72a25861af8c6e95e0'
                        key: {
                            name: 'x_2120492_athidhi_menu_item'
                            element: 'dietary_type'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5aed34f95a3847e7ab753c0ef7a1f158'
                        key: {
                            name: 'x_2120492_athidhi_service_request_item'
                            element: 'request'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5b1d019f50254fdd887b067c21b55f73'
                        key: {
                            name: 'x_2120492_athidhi_guest_preference'
                            element: 'preference_value'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '5b2fa72700b94435832d1273e1aa0333'
                        key: {
                            name: 'x_2120492_athidhi_housekeeping_task'
                            element: 'inspection_status'
                            value: 'pending'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '5b31633bb8e741928605a6371afad45a'
                        key: {
                            name: 'x_2120492_athidhi_room_amenity'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '5b7535b78a2a4b6c8b4a9917a114abe3'
                        key: {
                            name: 'x_2120492_athidhi_amenity'
                            element: 'category'
                            value: 'food'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5c1dbe6b31964b78be82fd1dcbc70043'
                        key: {
                            name: 'x_2120492_athidhi_food_order_item'
                            element: 'order'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5c42135bed294ce1bb18df634f5c5ade'
                        key: {
                            name: 'x_2120492_athidhi_housekeeping_task'
                            element: 'inspection_status'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5c5e80f071cc4cc6b62978c638b9c783'
                        key: {
                            name: 'x_2120492_athidhi_menu'
                            element: 'restaurant'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '5c818093fe784af598514bdbace6bef1'
                        key: {
                            name: 'x_2120492_athidhi_inventory_transaction'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5cce6ce29b5147b9bd76f9183a4f03ff'
                        key: {
                            name: 'x_2120492_athidhi_inventory_item'
                            element: 'unit'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '5d5457fcfdf045ab8afa0f85d7ac4dd8'
                        key: {
                            sys_security_acl: '077776d5d7b84af0bf01347ad64e803e'
                            sys_user_role: {
                                id: '0e2c8b4a8bd0443fb576b6f6b6349fbe'
                                key: {
                                    name: 'x_2120492_athidhi.manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5d6b3cf5977548ee9e8067a0f5abdc4d'
                        key: {
                            name: 'x_2120492_athidhi_stay'
                            element: 'children'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '5d88157b92584590885b2586d5b96cfb'
                        key: {
                            name: 'x_2120492_athidhi_food_order'
                            element: 'status'
                            value: 'cancelled'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '5d8d8d9fbae44e87883898679124ee5a'
                        key: {
                            name: 'x_2120492_athidhi_maintenance_request'
                            element: 'status'
                            value: 'resolved'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '5de517bfe7d840fba491d0c0343df315'
                        key: {
                            sys_security_acl: '98e0dfa8781a459f95882265bf684ec4'
                            sys_user_role: {
                                id: '8f68f11dd010432ba80972aa8ac2b77d'
                                key: {
                                    name: 'x_2120492_athidhi.housekeeping'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5df743a6699c415d860e268e45a9eae9'
                        key: {
                            name: 'x_2120492_athidhi_food_order'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5e311d56ac434099a2633a8d9defc666'
                        key: {
                            name: 'x_2120492_athidhi_housekeeping_task'
                            element: 'completed_at'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5e943f9a770847d1b688cdeee8bf2e0f'
                        key: {
                            name: 'x_2120492_athidhi_service_request_item'
                            element: 'notes'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '5ed2bc1c7ba3489fa8b81e4c2476b1a7'
                        key: {
                            sys_security_acl: '078d316b4c4548d399dcf8a2ab9ccfaf'
                            sys_user_role: {
                                id: '7a58b2b3dd1e4586ad7b6fb331fb8788'
                                key: {
                                    name: 'x_2120492_athidhi.guest'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5ed7fd79766a498aa6930bacbe4e1dd7'
                        key: {
                            name: 'x_2120492_athidhi_guest'
                            element: 'loyalty_tier'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '5edbbb1f408a4ebf81b601e021b6aadb'
                        key: {
                            sys_security_acl: 'bed0bf7989584481a9b1467a8f9bcd6b'
                            sys_user_role: {
                                id: 'b45ac46436c14974b223c8bff451f7e8'
                                key: {
                                    name: 'x_2120492_athidhi.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '5ee1b44a2e7449a0a5980b9824e50b92'
                        key: {
                            name: 'x_2120492_athidhi_inventory_item'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5ee667c39a754db793f4bf90166cc62b'
                        key: {
                            name: 'x_2120492_athidhi_room_type'
                            element: 'code'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '5ee6d6013def48538e7b869d783dc21c'
                        key: {
                            name: 'x_2120492_athidhi_work_task'
                            element: 'state'
                            value: 'open'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '5f3e0999c6ff42e5a9fd9e247b2961ad'
                        key: {
                            sys_security_acl: 'ebfa9d8ac35c4c00afa988762453dc36'
                            sys_user_role: {
                                id: '3e9f6959b3014deca7ed1004952c0462'
                                key: {
                                    name: 'x_2120492_athidhi.maintenance'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5f540b62829b4b8ea837d26d045e3310'
                        key: {
                            name: 'x_2120492_athidhi_room_type'
                            element: 'base_price'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5f58032ba1614766934e7abdc3069a72'
                        key: {
                            name: 'x_2120492_athidhi_guest'
                            element: 'phone'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '5faa317400e547aabbca0e0e83f9422f'
                        key: {
                            name: 'x_2120492_athidhi_payment'
                            element: 'status'
                            value: 'pending'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6036059850b74d1983bb303badc50b1a'
                        key: {
                            name: 'x_2120492_athidhi_reservation'
                            element: 'room_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '60b7520c5809477ea1bc1a42e3f1b69b'
                        key: {
                            sys_security_acl: 'abf52eba48394e57bfc451c7fe577675'
                            sys_user_role: {
                                id: '240a492786cd43859dd397028582ac16'
                                key: {
                                    name: 'x_2120492_athidhi.receptionist'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '613ab96996614b239974265d7451ef45'
                        key: {
                            name: 'x_2120492_athidhi_reservation'
                            element: 'adults'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '61b3a5a2095e4e1e91201eaf5407b54c'
                        key: {
                            name: 'x_2120492_athidhi_service_request'
                            element: 'request_type'
                            value: 'luggage'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '6213e7871beb41e9af9fbb9406f674bc'
                        key: {
                            name: 'x_2120492_athidhi_menu_item'
                            element: 'dietary_type'
                            value: 'other'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '621ea8ac0bd64baeb907be618a19f467'
                        key: {
                            name: 'x_2120492_athidhi_ai_interaction_log'
                            element: 'request_category'
                            value: 'unknown'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '628b665f0f52480f924502f90f5c7e67'
                        key: {
                            name: 'x_2120492_athidhi_maintenance_request'
                            element: 'assigned_to'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '629606653ffc4600bf08b4656d98b93a'
                        key: {
                            name: 'x_2120492_athidhi_service_request_item'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '62a3080b939a45c6aa6e496fb54338b6'
                        key: {
                            sys_security_acl: 'f4c728038dfb46368c1bf4ccc26772ae'
                            sys_user_role: {
                                id: 'b45ac46436c14974b223c8bff451f7e8'
                                key: {
                                    name: 'x_2120492_athidhi.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '62db988dd210466c937d32fe40c84c6e'
                        key: {
                            name: 'x_2120492_athidhi_guest'
                            element: 'guest_number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_page'
                        id: '6361090db5d54f029c91f5e2f28231d7'
                        key: {
                            endpoint: 'x_2120492_athidhi_guest_portal.do'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '6366c7b5223b476791a28979afa0f7b7'
                        key: {
                            name: 'x_2120492_athidhi_reservation'
                            element: 'booking_source'
                            value: 'travel_agency'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '63849aa4794d47d39dec9c760ae3132e'
                        key: {
                            name: 'x_2120492_athidhi_inventory_transaction'
                            element: 'transaction_type'
                            value: 'stock_in'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '63e2b5af1b0841dbaeda24e55a70e4fb'
                        key: {
                            name: 'x_2120492_athidhi_incident'
                            element: 'priority'
                            value: 'low'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '640020c6dca1475baba4d556d130641e'
                        key: {
                            name: 'x_2120492_athidhi_ai_interaction_log'
                            element: 'log_number'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '641707145eeb4a198516004d587be36c'
                        key: {
                            name: 'x_2120492_athidhi_maintenance_request'
                            element: 'reported_at'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '642b1eaa2d7b437b85031841d70db405'
                        key: {
                            name: 'x_2120492_athidhi_food_order_item'
                            element: 'unit_price'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '644a4bd8dc8e42249691231ebe9e92b6'
                        key: {
                            sys_security_acl: 'ad79ea4212734c0386aa6c748af7f923'
                            sys_user_role: {
                                id: '0e2c8b4a8bd0443fb576b6f6b6349fbe'
                                key: {
                                    name: 'x_2120492_athidhi.manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '649ae35ee64c4be39db92c7bb92cb587'
                        key: {
                            name: 'x_2120492_athidhi_service_catalog_item'
                            element: 'category'
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: '64caa4e283cf46b1bfb6c3b1b3e12316'
                        key: {
                            sys_ui_action: '8260643261ba45c8a0a645a06b7b2400'
                            sys_user_role: {
                                id: '8f68f11dd010432ba80972aa8ac2b77d'
                                key: {
                                    name: 'x_2120492_athidhi.housekeeping'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '64d16aad2a8c4e828e5d35d1075ad133'
                        key: {
                            name: 'x_2120492_athidhi_payment'
                            element: 'notes'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6527a42635fb4398b68dbbc720756610'
                        key: {
                            name: 'x_2120492_athidhi_service_request'
                            element: 'description'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '654a310e3104458bac2c7a4ca000d5bc'
                        key: {
                            sys_security_acl: '3fd23b86394846eda188461010faa27f'
                            sys_user_role: {
                                id: '8f68f11dd010432ba80972aa8ac2b77d'
                                key: {
                                    name: 'x_2120492_athidhi.housekeeping'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '657a2ff99a8c40e3861b85cf6c89464c'
                        key: {
                            sys_security_acl: '081ae3f296fa4f3d98ec0ae57e1f1f90'
                            sys_user_role: {
                                id: '0e2c8b4a8bd0443fb576b6f6b6349fbe'
                                key: {
                                    name: 'x_2120492_athidhi.manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '65d09fa1d3db4c8db1d4adbe79e57992'
                        key: {
                            sys_security_acl: '65a51030a5ec417b8945d7ff46e34580'
                            sys_user_role: {
                                id: 'b45ac46436c14974b223c8bff451f7e8'
                                key: {
                                    name: 'x_2120492_athidhi.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '6610c3e7011d4f65b08643a574b677e0'
                        key: {
                            name: 'x_2120492_athidhi_reservation'
                            element: 'payment_status'
                            value: 'refunded'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '66113f64794b453c8668ccc02998ce93'
                        key: {
                            name: 'x_2120492_athidhi_housekeeping_task'
                            element: 'status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '662f1f023f6c467cba8a26080f138d70'
                        key: {
                            sys_security_acl: 'baa1409b34454e8d93e7b93b0c4cba48'
                            sys_user_role: {
                                id: '240a492786cd43859dd397028582ac16'
                                key: {
                                    name: 'x_2120492_athidhi.receptionist'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_page'
                        id: '664cc400babe440598afa8a1ae96bedc'
                        key: {
                            endpoint: 'x_2120492_athidhi_manager_dashboard.do'
                        }
                    },
                    {
                        table: 'sys_number'
                        id: '66d94c26dfbe4e2390e6a84138999407'
                        key: {
                            category: 'x_2120492_athidhi_restaurant'
                            prefix: 'RST'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '66f3b8bf9584430cb144d60e0869e995'
                        key: {
                            sys_security_acl: 'bdc1556e1f78494aab7a491ca6d60f50'
                            sys_user_role: {
                                id: '0e2c8b4a8bd0443fb576b6f6b6349fbe'
                                key: {
                                    name: 'x_2120492_athidhi.manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '670b858e4be443079f4ffa05281b6480'
                        key: {
                            name: 'x_2120492_athidhi_service_catalog_item'
                            element: 'name'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '674f0e665dad4923adafcb1e9af29c46'
                        key: {
                            name: 'x_2120492_athidhi_food_order'
                            element: 'order_type'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '6761b98555b14139bae42f1410caa8b3'
                        key: {
                            name: 'x_2120492_athidhi_ai_interaction_log'
                            element: 'action_result'
                            value: 'ACTION_REQUIRED'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '67c40f79a5cb42c1a30dbc423999901b'
                        key: {
                            name: 'x_2120492_athidhi_service_catalog_item'
                            element: 'department'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '67c74d44dde142bf8cbebd44e0eea3e8'
                        key: {
                            sys_security_acl: '7269ba59ec134588aa0762faa3d081a9'
                            sys_user_role: {
                                id: 'bd9b587c1f9047609d32f4eea97e73bb'
                                key: {
                                    name: 'x_2120492_athidhi.restaurant'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '67d4712ee6484d6685a127ca274cccf8'
                        key: {
                            name: 'x_2120492_athidhi_inventory_transaction'
                            element: 'transaction_type'
                            value: 'return'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '67de5c3f4f634d77b56d25a007fba54b'
                        key: {
                            name: 'x_2120492_athidhi_inventory_item'
                            element: 'active'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '67fe904da75944ab884aa97120271910'
                        key: {
                            name: 'x_2120492_athidhi_reservation'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '680d4f9630ce43888e624b72f65c4351'
                        key: {
                            name: 'x_2120492_athidhi_stay'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '683449e7e76e4dfd90c835647e5cf6d4'
                        key: {
                            sys_security_acl: 'ebfa9d8ac35c4c00afa988762453dc36'
                            sys_user_role: {
                                id: '8f68f11dd010432ba80972aa8ac2b77d'
                                key: {
                                    name: 'x_2120492_athidhi.housekeeping'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '689afa7c5ab04d1ea46bfe0cb159ae4e'
                        key: {
                            name: 'x_2120492_athidhi_menu_item'
                            element: 'dietary_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '68b4a1cdc3fa443bad3a975b933c9b83'
                        key: {
                            sys_security_acl: 'abf52eba48394e57bfc451c7fe577675'
                            sys_user_role: {
                                id: 'bd9b587c1f9047609d32f4eea97e73bb'
                                key: {
                                    name: 'x_2120492_athidhi.restaurant'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '68bc5ef5417f4b7f926ee99caf47a150'
                        key: {
                            name: 'x_2120492_athidhi_payment'
                            element: 'payment_number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '68c41a778cea47d58e4ec513d47224f8'
                        key: {
                            name: 'x_2120492_athidhi_room_type'
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: '6913c9c0739f40b7a26a403a07eb4b03'
                        key: {
                            sys_ui_action: '598cfda54d3f47d199355e2dc1dae114'
                            sys_user_role: {
                                id: '8f68f11dd010432ba80972aa8ac2b77d'
                                key: {
                                    name: 'x_2120492_athidhi.housekeeping'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '694aec71cbad447db19780df19b28eb7'
                        key: {
                            name: 'x_2120492_athidhi_reservation'
                            element: 'status'
                            value: 'checked_out'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '69a8ace1de8f4f8da0fb7dda4384d277'
                        key: {
                            name: 'x_2120492_athidhi_restaurant'
                            element: 'restaurant_number'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '69ac8b4900de4728866dd8b7b5bccefa'
                        key: {
                            name: 'x_2120492_athidhi_room'
                            element: 'status'
                            value: 'reserved'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '69c4f900fab44b26bfd83bd1fd019ecf'
                        key: {
                            name: 'x_2120492_athidhi_guest'
                            element: 'identification_type'
                            value: 'other'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '69c6dc2692ac45f88eba2121e57b1389'
                        key: {
                            name: 'x_2120492_athidhi_maintenance_request'
                            element: 'category'
                            value: 'furniture'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '69cec5ea008f45819ab9b454b8bd3456'
                        key: {
                            name: 'x_2120492_athidhi_stay'
                            element: 'actual_check_in'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '6a0023b9e6af4daaa04d5ea5b9b1726d'
                        key: {
                            sys_security_acl: '5047336c60e84c109135300286702781'
                            sys_user_role: {
                                id: '0e2c8b4a8bd0443fb576b6f6b6349fbe'
                                key: {
                                    name: 'x_2120492_athidhi.manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '6a16e72145674a5c90ffd23e285849db'
                        key: {
                            sys_security_acl: '43b91e08d376461db98b6eab6a2c550f'
                            sys_user_role: {
                                id: 'b45ac46436c14974b223c8bff451f7e8'
                                key: {
                                    name: 'x_2120492_athidhi.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6a2706b9fad34fe1b4c123e77da68c19'
                        key: {
                            name: 'x_2120492_athidhi_room'
                            element: 'housekeeping_status'
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: '6a3e0671710b400ca4a92254761ebb59'
                        key: {
                            sys_ui_action: '8765fdf58afd4e07b0a75b90d3c5dabb'
                            sys_user_role: {
                                id: 'b45ac46436c14974b223c8bff451f7e8'
                                key: {
                                    name: 'x_2120492_athidhi.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6a66cfdc0b6c4579b558091d0eeef12c'
                        key: {
                            name: 'x_2120492_athidhi_guest'
                            element: 'first_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6a767214f0fc4afdb69dff98f2a1579e'
                        key: {
                            name: 'x_2120492_athidhi_menu_item'
                            element: 'active'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '6a7ac816e8b748d3a8bb55172592a3e4'
                        key: {
                            name: 'x_2120492_athidhi_inventory_item'
                            element: 'category'
                            value: 'maintenance'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '6aa3ae6b35fb4ac297e74fe055bd797e'
                        key: {
                            name: 'x_2120492_athidhi_ai_interaction_log'
                            element: 'request_category'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6b489658c04b45cb93518dac8f226616'
                        key: {
                            name: 'x_2120492_athidhi_menu_item'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6b68a34b451e4809a8e6a049cd3cfe69'
                        key: {
                            name: 'x_2120492_athidhi_inventory_item'
                            element: 'name'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6b801dfe3424456c8ea792c4d5cadf0b'
                        key: {
                            name: 'x_2120492_athidhi_room'
                            element: 'base_price'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6be130ac287d43cd998debd41a6deae2'
                        key: {
                            name: 'x_2120492_athidhi_service_catalog_item'
                            element: 'active'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6c2854f04b51469e9e5ccdfdf3918d43'
                        key: {
                            name: 'x_2120492_athidhi_food_order'
                            element: 'stay'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '6c415a6bcb56496785408028c6c37b1a'
                        key: {
                            sys_security_acl: '360426ce03cc48c7837e0a218ef599fd'
                            sys_user_role: {
                                id: '7a58b2b3dd1e4586ad7b6fb331fb8788'
                                key: {
                                    name: 'x_2120492_athidhi.guest'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '6c6c03252b824f1ba099b0cb917c5780'
                        key: {
                            sys_security_acl: '33770d0ccb03489596b92bfca053d8df'
                            sys_user_role: {
                                id: 'bd9b587c1f9047609d32f4eea97e73bb'
                                key: {
                                    name: 'x_2120492_athidhi.restaurant'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '6c978ef255cf4f18be06b2b10d7c8d4d'
                        key: {
                            sys_security_acl: 'e8b5c3592f3d4bc19d55220b11ebc87e'
                            sys_user_role: {
                                id: 'b45ac46436c14974b223c8bff451f7e8'
                                key: {
                                    name: 'x_2120492_athidhi.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6caf50aa7cf3418d874bf47b2859f6a4'
                        key: {
                            name: 'x_2120492_athidhi_reservation'
                            element: 'room'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6cc0f9acb0724b328a536653feabe4aa'
                        key: {
                            name: 'x_2120492_athidhi_room'
                            element: 'base_price'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '6d90f9ea85494c7d836414a831b84074'
                        key: {
                            sys_security_acl: 'a306555f0c0c4591a76f21a00a6f6304'
                            sys_user_role: {
                                id: 'bd9b587c1f9047609d32f4eea97e73bb'
                                key: {
                                    name: 'x_2120492_athidhi.restaurant'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '6d996647af1c48959a258d5361d9ef73'
                        key: {
                            name: 'x_2120492_athidhi_payment'
                            element: 'payment_method'
                            value: 'cash'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6dec0bf57e494ab8b5fca0d7279f8226'
                        key: {
                            name: 'x_2120492_athidhi_maintenance_request'
                            element: 'resolution_notes'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '6df241c0ef5a47b8b33c75b3044743af'
                        key: {
                            sys_security_acl: '78b24b1238da4b4c8c6a11617bb92b14'
                            sys_user_role: {
                                id: '3e9f6959b3014deca7ed1004952c0462'
                                key: {
                                    name: 'x_2120492_athidhi.maintenance'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '6e1978f1878c4562b519ef9626bbe465'
                        key: {
                            sys_security_acl: '0b0961efc1714b33a24c19745cea88f3'
                            sys_user_role: {
                                id: '0e2c8b4a8bd0443fb576b6f6b6349fbe'
                                key: {
                                    name: 'x_2120492_athidhi.manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6e1f4f1d34a24ae5aeb3ea008ff0c785'
                        key: {
                            name: 'x_2120492_athidhi_work_task'
                            element: 'task_type'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '6e3fe2a3d8184a008713a35144617e55'
                        key: {
                            sys_security_acl: '4edbf697f7cf432dbf3d2af8fce86c67'
                            sys_user_role: {
                                id: 'b45ac46436c14974b223c8bff451f7e8'
                                key: {
                                    name: 'x_2120492_athidhi.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '6e4aba4b539a44349bfae26a0b02fc2f'
                        key: {
                            name: 'x_2120492_athidhi_ai_interaction_log'
                            element: 'request_category'
                            value: 'dining'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '6f116cef422c44968d98ae688a383ccc'
                        key: {
                            name: 'x_2120492_athidhi_service_catalog_item'
                            element: 'category'
                            value: 'food_and_beverage'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '6f7b3ba3157842ed8c770c726a00f075'
                        key: {
                            name: 'x_2120492_athidhi_menu_item'
                            element: 'dietary_type'
                            value: 'vegetarian'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '6f7bddaa26d24b3eae03fd5c5b9cfdc5'
                        key: {
                            sys_security_acl: '5047336c60e84c109135300286702781'
                            sys_user_role: {
                                id: 'b45ac46436c14974b223c8bff451f7e8'
                                key: {
                                    name: 'x_2120492_athidhi.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_page'
                        id: '6fbd05b5547a49e7ad1817ffca12dc31'
                        key: {
                            endpoint: 'x_2120492_athidhi_kitchen_workspace.do'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '6fc2544e77db49589aad63e66127bfc0'
                        key: {
                            sys_security_acl: 'f1330588b4c34ffdbf857827a88de88d'
                            sys_user_role: {
                                id: 'b45ac46436c14974b223c8bff451f7e8'
                                key: {
                                    name: 'x_2120492_athidhi.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '6fedff55a80041f8877d5c15769e0388'
                        key: {
                            name: 'x_2120492_athidhi_maintenance_request'
                            element: 'category'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '70231e66d24645258502fa49c0535635'
                        key: {
                            name: 'x_2120492_athidhi_guest'
                            element: 'address'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '70547c84519e4af9bf4feb1ae8ba022a'
                        key: {
                            name: 'x_2120492_athidhi_work_task'
                            element: 'priority'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7058776b22d84dcab4eb9bca1c5f233b'
                        key: {
                            name: 'x_2120492_athidhi_service_catalog_item'
                            element: 'name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '705cdcd4eaa743278c2d2904f9077f6b'
                        key: {
                            name: 'x_2120492_athidhi_ai_interaction_log'
                            element: 'user'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '709bb2986d484309a2e64d2c33abcedf'
                        key: {
                            name: 'x_2120492_athidhi_service_catalog_item'
                            element: 'item_number'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '70b49a93843948468e22584371afef21'
                        key: {
                            name: 'x_2120492_athidhi_staff_profile'
                            element: 'phone'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '70d6bc84e45940d98a51c60c764b403c'
                        key: {
                            name: 'x_2120492_athidhi_incident'
                            element: 'priority'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '70dffaa42dd2436bbcbea830fc3cb646'
                        key: {
                            name: 'x_2120492_athidhi_reservation'
                            element: 'status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '711fb45bc3c247d98f6c366140acfd9b'
                        key: {
                            name: 'x_2120492_athidhi_service_request'
                            element: 'guest'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '719aa9cf9f064c0fbc9dedebba7e0578'
                        key: {
                            sys_security_acl: 'f76b832f789a4de5a9d5548b5bd85294'
                            sys_user_role: {
                                id: '240a492786cd43859dd397028582ac16'
                                key: {
                                    name: 'x_2120492_athidhi.receptionist'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '71c066c4ba9042e3b9c3edd0a0d40246'
                        key: {
                            name: 'x_2120492_athidhi_housekeeping_task'
                            element: 'priority'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '71d64726ff7c4d76a1616c5966eab697'
                        key: {
                            sys_security_acl: 'b58ecb147c364ccbbab54329ab0eb127'
                            sys_user_role: {
                                id: 'bd9b587c1f9047609d32f4eea97e73bb'
                                key: {
                                    name: 'x_2120492_athidhi.restaurant'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '72029235bb1c4858a71719de1c6d5299'
                        key: {
                            name: 'x_2120492_athidhi_housekeeping_task'
                            element: 'task_type'
                            value: 'maintenance_followup'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '72107e28374b415980ae7aba3247d230'
                        key: {
                            name: 'x_2120492_athidhi_guest'
                            element: 'preferences'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7212d05829674ba9b6dc94defd90fdc8'
                        key: {
                            name: 'x_2120492_athidhi_stay'
                            element: 'guest'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '72917e31fab04b59927dcc3087995a75'
                        key: {
                            name: 'x_2120492_athidhi_work_task'
                            element: 'started_at'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '729dcf673e3b45c8921b30bf6ad22111'
                        key: {
                            name: 'x_2120492_athidhi_housekeeping_task'
                            element: 'task_type'
                            value: 'turn_down'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '72be794f11f241ab91d4606ae8424f76'
                        key: {
                            name: 'x_2120492_athidhi_incident'
                            element: 'guest'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: '72c83d3532d14756bdcf1a60da5815ac'
                        key: {
                            sys_ui_action: 'b744cac0b9da42d7803a69b97eb368f9'
                            sys_user_role: {
                                id: 'b45ac46436c14974b223c8bff451f7e8'
                                key: {
                                    name: 'x_2120492_athidhi.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '72cb81c77db64ed88d0a2f46d4aa2e1e'
                        key: {
                            name: 'x_2120492_athidhi_work_task'
                            element: 'task_type'
                            value: 'other'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '72d5abef4b9242f88776874c8e1fcded'
                        key: {
                            name: 'x_2120492_athidhi_room_type'
                            element: 'amenities'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '72ddadb2cf02416ea1f21bd86f39deac'
                        key: {
                            name: 'x_2120492_athidhi_service_catalog_item'
                            element: 'price'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '73271b8c36e440968237d08d437452ed'
                        key: {
                            name: 'x_2120492_athidhi_payment'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7335f05bd519406c8f09e9289c498044'
                        key: {
                            name: 'x_2120492_athidhi_incident'
                            element: 'opened_at'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '735611a08bc3472b9d938748354b2abe'
                        key: {
                            name: 'x_2120492_athidhi_inventory_item'
                            element: 'category'
                            value: 'minibar'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '73e0366de1804680b460c49372073fdd'
                        key: {
                            name: 'x_2120492_athidhi_reservation'
                            element: 'confirmation_date'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '73e6f34641f04a2b888a742f27e9d4a2'
                        key: {
                            sys_security_acl: '3b52f6fa4021465ca9c09b905006c22b'
                            sys_user_role: {
                                id: 'b45ac46436c14974b223c8bff451f7e8'
                                key: {
                                    name: 'x_2120492_athidhi.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '7440c46771ed45bc8ac7ccc6ce8e82e3'
                        key: {
                            sys_security_acl: '0e902bab72f64214b39792b73d9d6c5b'
                            sys_user_role: {
                                id: 'b45ac46436c14974b223c8bff451f7e8'
                                key: {
                                    name: 'x_2120492_athidhi.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '749272fad00f4d488f925b3293fbe9bf'
                        key: {
                            sys_security_acl: '6eda963ae99648949767e148c7cd0c50'
                            sys_user_role: {
                                id: '0e2c8b4a8bd0443fb576b6f6b6349fbe'
                                key: {
                                    name: 'x_2120492_athidhi.manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '74b80b1694e442d9845aa10f66e98ec1'
                        key: {
                            name: 'x_2120492_athidhi_food_order'
                            element: 'total'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '74dfa80197d24214a38f0576831443d1'
                        key: {
                            name: 'x_2120492_athidhi_reservation'
                            element: 'status'
                            value: 'cancelled'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '750dae3cb8194068868d5450153915eb'
                        key: {
                            sys_security_acl: '3ecb327fa8f448beb7f09e55832943a0'
                            sys_user_role: {
                                id: 'b45ac46436c14974b223c8bff451f7e8'
                                key: {
                                    name: 'x_2120492_athidhi.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '756b3549ec7c41b89b559e2a4a98dda7'
                        key: {
                            name: 'x_2120492_athidhi_payment'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '7576ba12c5384509aabb37a149bc04ad'
                        key: {
                            sys_security_acl: '3b63f635228c4259b7ac86f1faf39bfe'
                            sys_user_role: {
                                id: 'b45ac46436c14974b223c8bff451f7e8'
                                key: {
                                    name: 'x_2120492_athidhi.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '759aad2d90484cf383bc1c34d25e3989'
                        key: {
                            name: 'x_2120492_athidhi_service_catalog_item'
                            element: 'category'
                            value: 'other'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '75dbbc8a8c894d00aed8d625bab50d99'
                        key: {
                            sys_security_acl: 'fe596eb42378451484cc9491ed74100a'
                            sys_user_role: {
                                id: '240a492786cd43859dd397028582ac16'
                                key: {
                                    name: 'x_2120492_athidhi.receptionist'
                                }
                            }
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '761393a92b254716bdc294757451bc6e'
                        key: {
                            name: 'x_2120492_athidhi_service_request'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '76394908e17a407a8f7521983787ef7d'
                        key: {
                            name: 'x_2120492_athidhi_guest'
                            element: 'preferences'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '767d14d24e3842e899f5e9b8442d5de6'
                        key: {
                            name: 'x_2120492_athidhi_incident'
                            element: 'category'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '768cadb689e04198bb906b0e6659d407'
                        key: {
                            name: 'x_2120492_athidhi_room_type'
                            element: 'description'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '76970e8bbece45ffabf4b5e00f489fd0'
                        key: {
                            sys_security_acl: 'e5166868eade4c5baaf75f04a2c7e96b'
                            sys_user_role: {
                                id: '7a58b2b3dd1e4586ad7b6fb331fb8788'
                                key: {
                                    name: 'x_2120492_athidhi.guest'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '76a8dc39db9942df9b50da4cdd613a06'
                        key: {
                            name: 'x_2120492_athidhi_service_request'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '76b28155b59f4d35ab3ed3772d77da16'
                        key: {
                            name: 'x_2120492_athidhi_department'
                            element: 'active'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '76c5371562f54f01ac989b68a581a31a'
                        key: {
                            name: 'x_2120492_athidhi_maintenance_request'
                            element: 'reported_at'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '76cf6ae5797d4e70a64aaf829c9b9a83'
                        key: {
                            name: 'x_2120492_athidhi_payment'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '76d0ad3e49ba4438bb17bb045893c4ca'
                        key: {
                            name: 'x_2120492_athidhi_ai_interaction_log'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '7712d166b9dd45368f29d661049a5a0e'
                        key: {
                            sys_security_acl: '29522196288346fa8daed8d46faddaa6'
                            sys_user_role: {
                                id: '3e9f6959b3014deca7ed1004952c0462'
                                key: {
                                    name: 'x_2120492_athidhi.maintenance'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '77238bf713bc499abdb475b9c7583a0a'
                        key: {
                            name: 'x_2120492_athidhi_menu'
                            element: 'description'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '773eed93b712467682211208527068ce'
                        key: {
                            name: 'x_2120492_athidhi_reservation'
                            element: 'status'
                            value: 'no_show'
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: '77ca7598d6f04a29a22504035704d638'
                        key: {
                            sys_ui_action: 'a18b0f47a93043a2af26fcd7fc9bf742'
                            sys_user_role: {
                                id: '0e2c8b4a8bd0443fb576b6f6b6349fbe'
                                key: {
                                    name: 'x_2120492_athidhi.manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '77dfc9d4ad9941938b8519457c51a97c'
                        key: {
                            sys_security_acl: '0b0961efc1714b33a24c19745cea88f3'
                            sys_user_role: {
                                id: 'bd9b587c1f9047609d32f4eea97e73bb'
                                key: {
                                    name: 'x_2120492_athidhi.restaurant'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: '7801e7a490ab41c5a0a8f4186ef94141'
                        key: {
                            sys_ui_action: '755fb1e0d15b4ef6b4606dcded64be19'
                            sys_user_role: {
                                id: '3e9f6959b3014deca7ed1004952c0462'
                                key: {
                                    name: 'x_2120492_athidhi.maintenance'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '780e1807abf34b61ad27e6b81e2d1903'
                        key: {
                            sys_security_acl: '7269ba59ec134588aa0762faa3d081a9'
                            sys_user_role: {
                                id: 'b45ac46436c14974b223c8bff451f7e8'
                                key: {
                                    name: 'x_2120492_athidhi.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '781db83c6cac4cf4a1db26d8e0659b64'
                        key: {
                            name: 'x_2120492_athidhi_payment'
                            element: 'reservation'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7845b0f988294a308025acf5aa5f8edd'
                        key: {
                            name: 'x_2120492_athidhi_room'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '78eb014085ba44669a34d8fd90f2e1f9'
                        key: {
                            sys_security_acl: '4af357d8f5b94a2baaecdecf8f24003f'
                            sys_user_role: {
                                id: '7a58b2b3dd1e4586ad7b6fb331fb8788'
                                key: {
                                    name: 'x_2120492_athidhi.guest'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '78feabb1f79d477aa93ed5b97ec32d4a'
                        key: {
                            name: 'x_2120492_athidhi_inventory_reorder'
                            element: 'approved_at'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '79286f07e9c441ea85ba056ad12928f5'
                        key: {
                            name: 'x_2120492_athidhi_ai_interaction_log'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '793795449be94d68b9ff681cbf464ab2'
                        key: {
                            name: 'x_2120492_athidhi_menu'
                            element: 'menu_type'
                            value: 'dinner'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '794eb5fe748d49b98adc916abf7cf360'
                        key: {
                            name: 'x_2120492_athidhi_ai_interaction_log'
                            element: 'user'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '79670b5ee86543c88893c1c557e48bc7'
                        key: {
                            name: 'x_2120492_athidhi_room_type'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '79bcd221b35548ddaeda63589d0721dd'
                        key: {
                            sys_security_acl: '31f27f36e7f344eb9d23558e3250c542'
                            sys_user_role: {
                                id: '7a58b2b3dd1e4586ad7b6fb331fb8788'
                                key: {
                                    name: 'x_2120492_athidhi.guest'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '79c2323985864cacaf98f9e698218f97'
                        key: {
                            name: 'x_2120492_athidhi_incident'
                            element: 'state'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '79e060a57b32439a9c8aa374d3cb8280'
                        key: {
                            sys_security_acl: 'ad79ea4212734c0386aa6c748af7f923'
                            sys_user_role: {
                                id: 'b45ac46436c14974b223c8bff451f7e8'
                                key: {
                                    name: 'x_2120492_athidhi.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_number'
                        id: '79f0c8ed3d144a5689957dcc461e4d55'
                        key: {
                            category: 'x_2120492_athidhi_service_catalog_item'
                            prefix: 'CAT'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7a178beb834e406fa1e7064703e709a1'
                        key: {
                            name: 'x_2120492_athidhi_ai_interaction_log'
                            element: 'model'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '7a261a83591e4919b90cc721ce4edcfe'
                        key: {
                            name: 'x_2120492_athidhi_payment'
                            element: 'status'
                            value: 'authorized'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7a51e3e1dda54be297377cc8bec4d03c'
                        key: {
                            name: 'x_2120492_athidhi_maintenance_request'
                            element: 'priority'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: '7a58b2b3dd1e4586ad7b6fb331fb8788'
                        key: {
                            name: 'x_2120492_athidhi.guest'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '7a914f595aa0490b9f1d07c52307d12c'
                        key: {
                            sys_security_acl: '78b24b1238da4b4c8c6a11617bb92b14'
                            sys_user_role: {
                                id: '8f68f11dd010432ba80972aa8ac2b77d'
                                key: {
                                    name: 'x_2120492_athidhi.housekeeping'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7a9af92c7bc84393a9642a34580393f0'
                        key: {
                            name: 'x_2120492_athidhi_menu'
                            element: 'valid_from'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7ab1976ed6c44c87909e907745d82c9e'
                        key: {
                            name: 'x_2120492_athidhi_incident'
                            element: 'description'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '7b0aa2571241416190b0940462358a1c'
                        key: {
                            sys_security_acl: 'ff4d6d536ed14135ae4cb6398f31bd27'
                            sys_user_role: {
                                id: '240a492786cd43859dd397028582ac16'
                                key: {
                                    name: 'x_2120492_athidhi.receptionist'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7b18bdeb213f441ca8869040d7a61cf1'
                        key: {
                            name: 'x_2120492_athidhi_staff_profile'
                            element: 'employee_number'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7b5baf04e94349ce8fce6f56d662517a'
                        key: {
                            name: 'x_2120492_athidhi_inventory_item'
                            element: 'category'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '7b83ab7d9a9b4c61a535620fc4c12b04'
                        key: {
                            name: 'x_2120492_athidhi_stay'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '7b9970ded41c44c6adde898b46edb56c'
                        key: {
                            name: 'x_2120492_athidhi_ai_interaction_log'
                            element: 'action_result'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '7bcf3206cea84d72a685b06eb96e7579'
                        key: {
                            name: 'x_2120492_athidhi_service_request'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7bdc579800c74714a50b4e6b8534a438'
                        key: {
                            name: 'x_2120492_athidhi_menu_item'
                            element: 'available'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7bfcd385da194d489338600c20dd15d8'
                        key: {
                            name: 'x_2120492_athidhi_guest_preference'
                            element: 'guest'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7c04f84e484d48c0815e60113ac58112'
                        key: {
                            name: 'x_2120492_athidhi_maintenance_request'
                            element: 'status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: '7c131b1958204f509f9c366bd39ec70a'
                        key: {
                            sys_ui_action: 'b744cac0b9da42d7803a69b97eb368f9'
                            sys_user_role: {
                                id: 'bd9b587c1f9047609d32f4eea97e73bb'
                                key: {
                                    name: 'x_2120492_athidhi.restaurant'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '7c49eda3c6794da7b426069677a913c1'
                        key: {
                            sys_security_acl: '89362f28780b4cb7aaafd8f339af6ab3'
                            sys_user_role: {
                                id: 'b45ac46436c14974b223c8bff451f7e8'
                                key: {
                                    name: 'x_2120492_athidhi.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '7c5223aa4a5d462cb60adbe211e3d8a7'
                        key: {
                            name: 'x_2120492_athidhi_housekeeping_task'
                            element: 'task_type'
                            value: 'check_in_preparation'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7c53f83f5b4c47df99edb79d8976d3f5'
                        key: {
                            name: 'x_2120492_athidhi_food_order'
                            element: 'tax'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '7c65d7a5a1314c3783acf201d5a1faa4'
                        key: {
                            name: 'x_2120492_athidhi_housekeeping_task'
                            element: 'task_type'
                            value: 'standard_cleaning'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '7caee86bda724ed89004a2408a9dfa41'
                        key: {
                            sys_security_acl: '98e0dfa8781a459f95882265bf684ec4'
                            sys_user_role: {
                                id: 'b45ac46436c14974b223c8bff451f7e8'
                                key: {
                                    name: 'x_2120492_athidhi.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7cef349b98f0473b81803c83829692ab'
                        key: {
                            name: 'x_2120492_athidhi_ai_interaction_log'
                            element: 'user_role'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '7d2509a2ad60443dbc71eeaeacb3250f'
                        key: {
                            name: 'x_2120492_athidhi_service_request_item'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7d37ac02bab84d95a17956b7aaf77574'
                        key: {
                            name: 'x_2120492_athidhi_payment'
                            element: 'amount'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7d47dfe6f87d49908328f1364b46f4a2'
                        key: {
                            name: 'x_2120492_athidhi_incident'
                            element: 'assigned_to'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '7d63dd61b5134bbf9c819da407fdfa33'
                        key: {
                            sys_security_acl: '9bcf835595d84307b7b0b224c12aed03'
                            sys_user_role: {
                                id: 'b45ac46436c14974b223c8bff451f7e8'
                                key: {
                                    name: 'x_2120492_athidhi.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7dbafe93761c4142b25fadd023efd60f'
                        key: {
                            name: 'x_2120492_athidhi_reservation'
                            element: 'check_in'
                            language: 'en'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '7ddf8d5923d64ec387dcd05d32162914'
                        key: {
                            name: 'x_2120492_athidhi_work_task'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7de97bf354e94060be0c823486f80781'
                        key: {
                            name: 'x_2120492_athidhi_service_request'
                            element: 'resolution_notes'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '7df809f9485d4b10b176fe030b4079d9'
                        key: {
                            name: 'x_2120492_athidhi_service_request'
                            element: 'priority'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7e0e64563d1b44dfb5ee2e12bfbb4cfe'
                        key: {
                            name: 'x_2120492_athidhi_food_order'
                            element: 'room'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '7e0eae8337d74bd4b4cf1be91ccb5286'
                        key: {
                            name: 'x_2120492_athidhi_guest_preference'
                            element: 'preference_type'
                            value: 'communication'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '7e370e3ec13e4fcab9d46616f3b2eda5'
                        key: {
                            name: 'x_2120492_athidhi_room'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '7e5d0eefee644ae1b0febd78f64e2676'
                        key: {
                            name: 'x_2120492_athidhi_ai_interaction_log'
                            element: 'request_category'
                            value: 'operations'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '7f091e7df88446b98341ac099230aec2'
                        key: {
                            sys_security_acl: '9bcf835595d84307b7b0b224c12aed03'
                            sys_user_role: {
                                id: '240a492786cd43859dd397028582ac16'
                                key: {
                                    name: 'x_2120492_athidhi.receptionist'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '7f4103743e774217976be71cddcc1336'
                        key: {
                            sys_security_acl: '0884bac06245425bb31be27443bbfad6'
                            sys_user_role: {
                                id: '0e2c8b4a8bd0443fb576b6f6b6349fbe'
                                key: {
                                    name: 'x_2120492_athidhi.manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '7f4e8565d1da471fa9b3ecc1ab82422d'
                        key: {
                            name: 'x_2120492_athidhi_food_order'
                            element: 'status'
                            value: 'delivered'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7f55ac9fbece48d9af0d897499a86994'
                        key: {
                            name: 'x_2120492_athidhi_work_task'
                            element: 'priority'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7f5a38d8ecee4a8890475eab2b8a98fe'
                        key: {
                            name: 'x_2120492_athidhi_service_request_item'
                            element: 'total_price'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7f5d12155dbe46c09f32bd3572b133b0'
                        key: {
                            name: 'x_2120492_athidhi_restaurant'
                            element: 'description'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '7f72302a25044afca9e9b861f15b0e94'
                        key: {
                            name: 'x_2120492_athidhi_housekeeping_task'
                            element: 'status'
                            value: 'in_progress'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7fbda37c2bdd4c7394f660982886b4be'
                        key: {
                            name: 'x_2120492_athidhi_staff_profile'
                            element: 'notes'
                        }
                    },
                    {
                        table: 'sys_number'
                        id: '800eb8d9de134d37b269437482b72819'
                        key: {
                            category: 'x_2120492_athidhi_payment'
                            prefix: 'PAY'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '80101dfc77264201aa76f0f054bb2398'
                        key: {
                            name: 'x_2120492_athidhi_incident'
                            element: 'short_description'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '80a11af179674307a28848433a39e020'
                        key: {
                            sys_security_acl: '36ccf90d87a844ef90b2966b93f1da4a'
                            sys_user_role: {
                                id: '0e2c8b4a8bd0443fb576b6f6b6349fbe'
                                key: {
                                    name: 'x_2120492_athidhi.manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '80e294e757ba4bbe87a9a482254085b9'
                        key: {
                            name: 'x_2120492_athidhi_inventory_reorder'
                            element: 'approved_at'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '8112c622189e48e7b5723b6b35b27301'
                        key: {
                            sys_security_acl: 'ad79ea4212734c0386aa6c748af7f923'
                            sys_user_role: {
                                id: '240a492786cd43859dd397028582ac16'
                                key: {
                                    name: 'x_2120492_athidhi.receptionist'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '815e7e195bad459daf07c06a0d56e36b'
                        key: {
                            name: 'x_2120492_athidhi_ai_interaction_log'
                            element: 'action_result'
                            value: 'UNSUPPORTED_ACTION'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '818706335efd497493ab8e345d1702c1'
                        key: {
                            name: 'x_2120492_athidhi_incident'
                            element: 'resolution_notes'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '81f90b761ce746c8926a931c4ab5c72c'
                        key: {
                            name: 'x_2120492_athidhi_inventory_transaction'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '81fc2ab603554a96ba4632531a3e0e4e'
                        key: {
                            sys_security_acl: 'dd3e084692d5467e87d2262f0ac676d8'
                            sys_user_role: {
                                id: '0e2c8b4a8bd0443fb576b6f6b6349fbe'
                                key: {
                                    name: 'x_2120492_athidhi.manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '8286004792b44a62ade7ff3292c0e864'
                        key: {
                            name: 'x_2120492_athidhi_food_order'
                            element: 'priority'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '82da5e7d240844bf96b802f4930f3bbc'
                        key: {
                            name: 'x_2120492_athidhi_service_catalog_item'
                            element: 'default_priority'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '82e2a1f8f79b45718036529380126993'
                        key: {
                            name: 'x_2120492_athidhi_service_request'
                            element: 'request_type'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '82f06003731e46c9b158b762b46e846c'
                        key: {
                            name: 'x_2120492_athidhi_food_order'
                            element: 'guest'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '832f12c7bc2045e8b921988098a3a900'
                        key: {
                            name: 'x_2120492_athidhi_housekeeping_task'
                            element: 'task_type'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '833884fa7be94ce6ac0e5041f18ae624'
                        key: {
                            name: 'x_2120492_athidhi_restaurant'
                            element: 'opening_time'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '8360e81a5c3a48b2b3603f1202307d6d'
                        key: {
                            name: 'x_2120492_athidhi_menu_item'
                            element: 'category'
                            value: 'dessert'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '839d3a46a879436f98b345152d6a80ee'
                        key: {
                            name: 'x_2120492_athidhi_food_order'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '83ef47a9b4994e2bb68130d71d7ac685'
                        key: {
                            name: 'x_2120492_athidhi_service_catalog_item'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '8411027d08974951869ca434a7af28aa'
                        key: {
                            sys_security_acl: '81137e087625493f8a3c521fe8dc1fcb'
                            sys_user_role: {
                                id: '0e2c8b4a8bd0443fb576b6f6b6349fbe'
                                key: {
                                    name: 'x_2120492_athidhi.manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '841e6fe62d79417ba626362f28437de0'
                        key: {
                            sys_security_acl: 'e387c99b072d4688a6a635b2d8f306d7'
                            sys_user_role: {
                                id: '0e2c8b4a8bd0443fb576b6f6b6349fbe'
                                key: {
                                    name: 'x_2120492_athidhi.manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '848b6290c2d847a58a59b0c23bfe59a5'
                        key: {
                            sys_security_acl: 'ff4d6d536ed14135ae4cb6398f31bd27'
                            sys_user_role: {
                                id: 'b45ac46436c14974b223c8bff451f7e8'
                                key: {
                                    name: 'x_2120492_athidhi.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8497a388bbe64a9bbe3531caa3aed7f6'
                        key: {
                            name: 'x_2120492_athidhi_maintenance_request'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '849bf2b955fd453e94288316d47f19bb'
                        key: {
                            name: 'x_2120492_athidhi_inventory_item'
                            element: 'active'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '84d51bd8abea440aba857bb8dda5d06e'
                        key: {
                            name: 'x_2120492_athidhi_service_catalog_item'
                            element: 'default_priority'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '85515353c39b421bb952fa5fa2f56d67'
                        key: {
                            name: 'x_2120492_athidhi_inventory_reorder'
                            element: 'approved_by'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '8578149bbe8c4c1a9c3eb5a4c9778fe7'
                        key: {
                            name: 'x_2120492_athidhi_room_type'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '8579391af17e405b90d275525102b72e'
                        key: {
                            name: 'x_2120492_athidhi_room'
                            element: 'occupancy_status'
                            value: 'occupied'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '85987215ef564e20991b33b21ce96a42'
                        key: {
                            sys_security_acl: 'df4a5c6bc84641ec9e0f122dcbb9a52a'
                            sys_user_role: {
                                id: 'b45ac46436c14974b223c8bff451f7e8'
                                key: {
                                    name: 'x_2120492_athidhi.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '85a47f75d9f6467f90666ecd1a7e5c69'
                        key: {
                            name: 'x_2120492_athidhi_reservation'
                            element: 'payment_status'
                        }
                    },
                    {
                        table: 'sys_number'
                        id: '85c32590de34480499831742dbc48c29'
                        key: {
                            category: 'x_2120492_athidhi_stay'
                            prefix: 'STY'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '8608c65be32f4b7c89ae6f141c87c37a'
                        key: {
                            name: 'x_2120492_athidhi_menu_item'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '862597e462bf48b09670639c3120262f'
                        key: {
                            sys_security_acl: '75fc729ec3fe49be906bacbd7965915e'
                            sys_user_role: {
                                id: '240a492786cd43859dd397028582ac16'
                                key: {
                                    name: 'x_2120492_athidhi.receptionist'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: '8637ef19877a4d3c9e5ca2476e5855b6'
                        key: {
                            role: {
                                id: 'b45ac46436c14974b223c8bff451f7e8'
                                key: {
                                    name: 'x_2120492_athidhi.admin'
                                }
                            }
                            contains: {
                                id: '0e2c8b4a8bd0443fb576b6f6b6349fbe'
                                key: {
                                    name: 'x_2120492_athidhi.manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '868b110ae0ba4f9e99a9346cabb85254'
                        key: {
                            name: 'x_2120492_athidhi_service_request'
                            element: 'request_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '870b38f0e53c4515b7416bb6e3ad3023'
                        key: {
                            name: 'x_2120492_athidhi_guest'
                            element: 'identification_type'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '8745bedb913a42f38cacea7900d5816a'
                        key: {
                            name: 'x_2120492_athidhi_incident'
                            element: 'state'
                            value: 'on_hold'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '87603fb7582347dc866123f989273ce1'
                        key: {
                            name: 'x_2120492_athidhi_room'
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: '8806d555158a41128c30850d81c5c973'
                        key: {
                            role: {
                                id: '0e2c8b4a8bd0443fb576b6f6b6349fbe'
                                key: {
                                    name: 'x_2120492_athidhi.manager'
                                }
                            }
                            contains: {
                                id: '3e9f6959b3014deca7ed1004952c0462'
                                key: {
                                    name: 'x_2120492_athidhi.maintenance'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '886a5042427d4287b0e0e046ace7a957'
                        key: {
                            name: 'x_2120492_athidhi_service_request'
                            element: 'status'
                            value: 'new'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '8871ae1ba10e44da9dc55d3f04334f17'
                        key: {
                            name: 'x_2120492_athidhi_reservation'
                            element: 'booking_source'
                            value: 'direct'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '88854e05f6804b46baf305f163a4ccfb'
                        key: {
                            name: 'x_2120492_athidhi_incident'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '88d4fae5720f4c4987e5c6f6585d65c9'
                        key: {
                            name: 'x_2120492_athidhi_incident'
                            element: 'priority'
                            value: 'critical'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '88fd871113364db9a5254cf4bf1c962e'
                        key: {
                            name: 'x_2120492_athidhi_staff_profile'
                            element: 'department'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '89474af909574d3982981b716a3e57c4'
                        key: {
                            name: 'x_2120492_athidhi_service_request'
                            element: 'room'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '896c4df7579d4c739c0d5e42ae76d36a'
                        key: {
                            name: 'x_2120492_athidhi_reservation'
                            element: 'total_amount'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '896e84c9e0654e858f7aca0310d2d076'
                        key: {
                            name: 'x_2120492_athidhi_food_order'
                            element: 'status'
                            value: 'accepted'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '896ffed9cab24d8e828f527b55b07544'
                        key: {
                            name: 'x_2120492_athidhi_restaurant'
                            element: 'active'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: '89abe822ccd541bb8bdc62f30cf7adbf'
                        key: {
                            sys_ui_action: '3200c3186dbd4bf2b7957f2431398b84'
                            sys_user_role: {
                                id: 'bd9b587c1f9047609d32f4eea97e73bb'
                                key: {
                                    name: 'x_2120492_athidhi.restaurant'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: '89d1dfb9626648c098db7017f157115e'
                        key: {
                            sys_ui_action: '755fb1e0d15b4ef6b4606dcded64be19'
                            sys_user_role: {
                                id: '240a492786cd43859dd397028582ac16'
                                key: {
                                    name: 'x_2120492_athidhi.receptionist'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '8a22d4d4429948ec885c5731a6e9e829'
                        key: {
                            sys_security_acl: '6febd0dd78b84bc9a86cb405a9ad6607'
                            sys_user_role: {
                                id: '0e2c8b4a8bd0443fb576b6f6b6349fbe'
                                key: {
                                    name: 'x_2120492_athidhi.manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8a2f51b9ed8e4e57a68b04ace60db21a'
                        key: {
                            name: 'x_2120492_athidhi_guest'
                            element: 'active'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8a48a1fa651a4b45ac91a97bd4959ec8'
                        key: {
                            name: 'x_2120492_athidhi_payment'
                            element: 'payment_number'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8a4d4d884baf49e68d7a4e4197645b20'
                        key: {
                            name: 'x_2120492_athidhi_service_request'
                            element: 'completed_at'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8a6df161d6624674a6e817ea872d204b'
                        key: {
                            name: 'x_2120492_athidhi_work_task'
                            element: 'resolution_notes'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8aa3e186b87143b5930194e28deddfc9'
                        key: {
                            name: 'x_2120492_athidhi_food_order'
                            element: 'tax'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '8b0c49f89b604c129a14356d80ddbf3d'
                        key: {
                            name: 'x_2120492_athidhi_inventory_reorder'
                            element: 'status'
                            value: 'received'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8b2f9979f326417f8c54b59035055250'
                        key: {
                            name: 'x_2120492_athidhi_food_order'
                            element: 'service_request'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '8b48dae256d74acdb49d33877534e8eb'
                        key: {
                            name: 'x_2120492_athidhi_maintenance_request'
                            element: 'status'
                            value: 'new'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8b83df6f4dd842abb8ad6367f66bc86b'
                        key: {
                            name: 'x_2120492_athidhi_service_request'
                            element: 'stay'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8ba1a8427b344e748d4a4f93961c60b5'
                        key: {
                            name: 'x_2120492_athidhi_reservation'
                            element: 'reservation_number'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '8ba35bedd5ed4f9bbfbfa607497020ca'
                        key: {
                            sys_security_acl: '3fd23b86394846eda188461010faa27f'
                            sys_user_role: {
                                id: 'bd9b587c1f9047609d32f4eea97e73bb'
                                key: {
                                    name: 'x_2120492_athidhi.restaurant'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8bde6a5c2b81493e9d5632e451147ab8'
                        key: {
                            name: 'x_2120492_athidhi_housekeeping_task'
                            element: 'priority'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '8be075aaa96447d2b8b5e04b66c7c048'
                        key: {
                            sys_security_acl: 'cd674332b9fe46cda4681c141bf888c6'
                            sys_user_role: {
                                id: 'b45ac46436c14974b223c8bff451f7e8'
                                key: {
                                    name: 'x_2120492_athidhi.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8be2855397de475e9877b4fd2fd3ada7'
                        key: {
                            name: 'x_2120492_athidhi_service_request'
                            element: 'assigned_group'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8c67c4344d5d481a9c4f10c5c034d034'
                        key: {
                            name: 'x_2120492_athidhi_inventory_item'
                            element: 'item_number'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8cb24312eb86421fb265b1ee43849ff0'
                        key: {
                            name: 'x_2120492_athidhi_food_order_item'
                            element: 'menu_item'
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: '8cd000c139d8431abba7163e8194d37e'
                        key: {
                            sys_ui_action: '1d2f24ed96fc49f181f74e1365382666'
                            sys_user_role: {
                                id: 'b45ac46436c14974b223c8bff451f7e8'
                                key: {
                                    name: 'x_2120492_athidhi.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8d0e6cbbb37e4f17b13fd10920fe3d92'
                        key: {
                            name: 'x_2120492_athidhi_restaurant'
                            element: 'closing_time'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '8d4505889c614437805bd1176b9f38d2'
                        key: {
                            sys_security_acl: '9ed84c72827e4148a2a00ff7c74ff1f1'
                            sys_user_role: {
                                id: '3e9f6959b3014deca7ed1004952c0462'
                                key: {
                                    name: 'x_2120492_athidhi.maintenance'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '8d8bc42f18fc44d28ed0721cae343e98'
                        key: {
                            sys_security_acl: '10217a5bf82d40c69f9ea0ee1b0fb40b'
                            sys_user_role: {
                                id: 'b45ac46436c14974b223c8bff451f7e8'
                                key: {
                                    name: 'x_2120492_athidhi.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8d9de73d4cf243b7ac3431b9f748101b'
                        key: {
                            name: 'x_2120492_athidhi_maintenance_request'
                            element: 'assigned_to'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '8db1778284a543828e2df6bc434f76b1'
                        key: {
                            sys_security_acl: '98adc9bc1b244bc4b1e1e005d192257d'
                            sys_user_role: {
                                id: '240a492786cd43859dd397028582ac16'
                                key: {
                                    name: 'x_2120492_athidhi.receptionist'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '8ddadac9bd1445b182f59a2897eece5c'
                        key: {
                            sys_security_acl: '0b0961efc1714b33a24c19745cea88f3'
                            sys_user_role: {
                                id: '240a492786cd43859dd397028582ac16'
                                key: {
                                    name: 'x_2120492_athidhi.receptionist'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '8df26305003845678f33d52790609d66'
                        key: {
                            name: 'x_2120492_athidhi_food_order'
                            element: 'status'
                            value: 'ready'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '8e0ce4e0f0254e4193553216fc52a789'
                        key: {
                            sys_security_acl: '8952653b1f4844f88f004efb214c0a53'
                            sys_user_role: {
                                id: '0e2c8b4a8bd0443fb576b6f6b6349fbe'
                                key: {
                                    name: 'x_2120492_athidhi.manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '8e25d4c8d6214bc9a7bbbd394f90896e'
                        key: {
                            name: 'x_2120492_athidhi_maintenance_request'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8e7cc842bfc3407fb04ce8df8a8f0cb7'
                        key: {
                            name: 'x_2120492_athidhi_menu'
                            element: 'valid_to'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '8e7ea6fef9f5484f9b3712f087883740'
                        key: {
                            name: 'x_2120492_athidhi_inventory_item'
                            element: 'category'
                            value: 'other'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8ea1386159fd417da2c04ed42cf4ef43'
                        key: {
                            name: 'x_2120492_athidhi_service_catalog_item'
                            element: 'active'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '8ea8f90b347846a2ab534132ba7f8b12'
                        key: {
                            name: 'x_2120492_athidhi_incident'
                            element: 'state'
                            value: 'in_progress'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8f3202fef1944717a42104e71cbbb346'
                        key: {
                            name: 'x_2120492_athidhi_amenity'
                            element: 'description'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: '8f68f11dd010432ba80972aa8ac2b77d'
                        key: {
                            name: 'x_2120492_athidhi.housekeeping'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8f77a7603eed4998a4def99f5ab8b1a3'
                        key: {
                            name: 'x_2120492_athidhi_work_task'
                            element: 'opened_at'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8fc41655fc314a728837fa85dcab6de3'
                        key: {
                            name: 'x_2120492_athidhi_service_request_item'
                            element: 'quantity'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '8fc805d5186045fe8ccbc09eeef79046'
                        key: {
                            sys_security_acl: '98e0dfa8781a459f95882265bf684ec4'
                            sys_user_role: {
                                id: 'bd9b587c1f9047609d32f4eea97e73bb'
                                key: {
                                    name: 'x_2120492_athidhi.restaurant'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '90b481ef6de44302bdad80c025c15b40'
                        key: {
                            sys_security_acl: 'bed0bf7989584481a9b1467a8f9bcd6b'
                            sys_user_role: {
                                id: '8f68f11dd010432ba80972aa8ac2b77d'
                                key: {
                                    name: 'x_2120492_athidhi.housekeeping'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '90c5b256d3c94fcb8963d90818f164e8'
                        key: {
                            sys_security_acl: '21f02e1265084acba8a231b1153d60c4'
                            sys_user_role: {
                                id: 'b45ac46436c14974b223c8bff451f7e8'
                                key: {
                                    name: 'x_2120492_athidhi.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '912b60a3067146789625dbb08a9f75d1'
                        key: {
                            name: 'x_2120492_athidhi_amenity'
                            element: 'category'
                            value: 'other'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '91c52c95f63d40e6a2e3a1582a78b029'
                        key: {
                            name: 'x_2120492_athidhi_housekeeping_task'
                            element: 'inspection_status'
                            value: 'failed'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '92862bd1c99e4d5580f2bb8efdc33dfe'
                        key: {
                            name: 'x_2120492_athidhi_amenity'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9291c1a49d544b5ca894fcd2ac56fb57'
                        key: {
                            name: 'x_2120492_athidhi_food_order'
                            element: 'ordered_at'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '9297275ea03647cd8072e4d50e18ae92'
                        key: {
                            name: 'x_2120492_athidhi_service_catalog_item'
                            element: 'category'
                            value: 'guest_services'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '92ac3ddcb8eb46e1a2c9aeb6cc1e9d26'
                        key: {
                            name: 'x_2120492_athidhi_reservation'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '92db33157212434db6006bf34d789cd1'
                        key: {
                            sys_security_acl: 'e387c99b072d4688a6a635b2d8f306d7'
                            sys_user_role: {
                                id: '8f68f11dd010432ba80972aa8ac2b77d'
                                key: {
                                    name: 'x_2120492_athidhi.housekeeping'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '92e8092a19cc4f738bcbbfccf2f4f376'
                        key: {
                            name: 'x_2120492_athidhi_stay'
                            element: 'status'
                            value: 'checked_in'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '92f5c9dad41f4c03b2be3bdbcb38dada'
                        key: {
                            name: 'x_2120492_athidhi_incident'
                            element: 'category'
                            value: 'other'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '933230037b804d42b3f922569b2e0713'
                        key: {
                            name: 'x_2120492_athidhi_room_type'
                            element: 'bed_type'
                            value: 'double'
                        }
                    },
                    {
                        table: 'sys_number'
                        id: '938a72696fef40fd9313bd80fca3a6b2'
                        key: {
                            category: 'x_2120492_athidhi_room'
                            prefix: 'RM'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '93f9d329f1b446c0b341a31b1669e50a'
                        key: {
                            sys_security_acl: '4edb313bed594c37961589cc3f349010'
                            sys_user_role: {
                                id: '0e2c8b4a8bd0443fb576b6f6b6349fbe'
                                key: {
                                    name: 'x_2120492_athidhi.manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: '94446c77431b49b08b62e734b68f9cac'
                        key: {
                            sys_ui_action: '598cfda54d3f47d199355e2dc1dae114'
                            sys_user_role: {
                                id: '0e2c8b4a8bd0443fb576b6f6b6349fbe'
                                key: {
                                    name: 'x_2120492_athidhi.manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_number'
                        id: '946299de52534354a7614d6d468b040c'
                        key: {
                            category: 'x_2120492_athidhi_room_type'
                            prefix: 'RTY'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '946458b0a50a4e9686607924c3d90a17'
                        key: {
                            name: 'x_2120492_athidhi_department'
                            element: 'name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '94b52c9bdeb54a37a738b5882326c83f'
                        key: {
                            sys_security_acl: '29522196288346fa8daed8d46faddaa6'
                            sys_user_role: {
                                id: '0e2c8b4a8bd0443fb576b6f6b6349fbe'
                                key: {
                                    name: 'x_2120492_athidhi.manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '94d4c2ff843647779387ece91317ece5'
                        key: {
                            sys_security_acl: 'da44235fbac4497884218531468b496e'
                            sys_user_role: {
                                id: '0e2c8b4a8bd0443fb576b6f6b6349fbe'
                                key: {
                                    name: 'x_2120492_athidhi.manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '94e31bb8e81e47f69413639a92901468'
                        key: {
                            name: 'x_2120492_athidhi_guest_preference'
                            element: 'preference_type'
                            value: 'beverage'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '94f7fa8d8a60490f83b11d608a8769bb'
                        key: {
                            name: 'x_2120492_athidhi_guest'
                            element: 'loyalty_tier'
                            value: 'silver'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9542654c4ad34247b8f6886f4ef96540'
                        key: {
                            name: 'x_2120492_athidhi_menu'
                            element: 'active'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9592db1cfb6a472a8fda16f30ae1b580'
                        key: {
                            name: 'x_2120492_athidhi_housekeeping_task'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '959d03c90342450d8497156655e3dcbf'
                        key: {
                            name: 'x_2120492_athidhi_staff_profile'
                            element: 'active'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '95bb9ab30c544557bd7fce4742ff4c54'
                        key: {
                            sys_security_acl: 'bdc1556e1f78494aab7a491ca6d60f50'
                            sys_user_role: {
                                id: 'b45ac46436c14974b223c8bff451f7e8'
                                key: {
                                    name: 'x_2120492_athidhi.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '95ef9a1e20eb4390970cbe6ea78daa5a'
                        key: {
                            sys_security_acl: '787aa58f789a412ca81e624277ad99f3'
                            sys_user_role: {
                                id: 'bd9b587c1f9047609d32f4eea97e73bb'
                                key: {
                                    name: 'x_2120492_athidhi.restaurant'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '969a677ce4c34d1ea0161f301ff955f4'
                        key: {
                            name: 'x_2120492_athidhi_incident'
                            element: 'priority'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '96c97527a67a4add834bc08699a0a53c'
                        key: {
                            name: 'x_2120492_athidhi_guest'
                            element: 'loyalty_tier'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '973fa0dc52d64603bb39dfb4a108290a'
                        key: {
                            name: 'x_2120492_athidhi_inventory_item'
                            element: 'reorder_quantity'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '9744371243db4cfba8f2b1f8d1ac0cf1'
                        key: {
                            name: 'x_2120492_athidhi_work_task'
                            element: 'task_type'
                            value: 'front_desk'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '97b96d94086f4d94a4a00d4afd580e7c'
                        key: {
                            sys_security_acl: 'ce0d69e096c44fada29623828427b611'
                            sys_user_role: {
                                id: '3e9f6959b3014deca7ed1004952c0462'
                                key: {
                                    name: 'x_2120492_athidhi.maintenance'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '97dac7d002e74299b01d6f31298d885c'
                        key: {
                            name: 'x_2120492_athidhi_inventory_reorder'
                            element: 'requested_by'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '97fb165729794583bc8eea75f8ba7f0d'
                        key: {
                            name: 'x_2120492_athidhi_incident'
                            element: 'state'
                            value: 'closed'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '983e270266934f61a3b57393682d7a7b'
                        key: {
                            name: 'x_2120492_athidhi_menu'
                            element: 'menu_type'
                            value: 'lunch'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '98cf5e2ed4ea46afa76155ffd061aa77'
                        key: {
                            name: 'x_2120492_athidhi_maintenance_request'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '98da3ff76ec144179f98e3981b292aa8'
                        key: {
                            name: 'x_2120492_athidhi_inventory_transaction'
                            element: 'transaction_type'
                            value: 'stock_out'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '98e1452d21ca4c0da91567a22eac4001'
                        key: {
                            name: 'x_2120492_athidhi_room'
                            element: 'status'
                            value: 'out_of_service'
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: '9922c2660a8a4273b04ef3093bbe938d'
                        key: {
                            role: {
                                id: '0e2c8b4a8bd0443fb576b6f6b6349fbe'
                                key: {
                                    name: 'x_2120492_athidhi.manager'
                                }
                            }
                            contains: {
                                id: 'bd9b587c1f9047609d32f4eea97e73bb'
                                key: {
                                    name: 'x_2120492_athidhi.restaurant'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '993149e556b64eff9873a9293f4fea27'
                        key: {
                            sys_security_acl: 'ce0d69e096c44fada29623828427b611'
                            sys_user_role: {
                                id: '240a492786cd43859dd397028582ac16'
                                key: {
                                    name: 'x_2120492_athidhi.receptionist'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '99d7b12372724baa85ef4a78b74e30ba'
                        key: {
                            name: 'x_2120492_athidhi_service_request'
                            element: 'resolution_notes'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '99dfc574d56c4299a5dec7c5529ff95b'
                        key: {
                            name: 'x_2120492_athidhi_guest_preference'
                            element: 'preference_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '99f553763d954f2da3414e546e7bb173'
                        key: {
                            name: 'x_2120492_athidhi_restaurant'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '99f81f94dfb248159b6e3d66b401d3ae'
                        key: {
                            name: 'x_2120492_athidhi_incident'
                            element: 'guest'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '9a40dbe9cda54f2da740cf2afde1fd43'
                        key: {
                            sys_security_acl: '8952653b1f4844f88f004efb214c0a53'
                            sys_user_role: {
                                id: '240a492786cd43859dd397028582ac16'
                                key: {
                                    name: 'x_2120492_athidhi.receptionist'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9a9defe5b0704b8ab5b8987a3b8b7f47'
                        key: {
                            name: 'x_2120492_athidhi_guest'
                            element: 'identification_number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: '9ab835564f3c425f83715315b7cdd914'
                        key: {
                            sys_ui_action: '755fb1e0d15b4ef6b4606dcded64be19'
                            sys_user_role: {
                                id: 'b45ac46436c14974b223c8bff451f7e8'
                                key: {
                                    name: 'x_2120492_athidhi.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '9ac65452a1ee48cb834c49f41b0aeae9'
                        key: {
                            sys_security_acl: '29522196288346fa8daed8d46faddaa6'
                            sys_user_role: {
                                id: '8f68f11dd010432ba80972aa8ac2b77d'
                                key: {
                                    name: 'x_2120492_athidhi.housekeeping'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9acdfacbef3f4dc98e415d84e66e7d09'
                        key: {
                            name: 'x_2120492_athidhi_service_request'
                            element: 'priority'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9aef7fdd73254203a95a54097011048c'
                        key: {
                            name: 'x_2120492_athidhi_food_order'
                            element: 'subtotal'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9b393797384e46b3976404e578c99c6f'
                        key: {
                            name: 'x_2120492_athidhi_room_amenity'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9b5a954fad5f4b7aa16bb1dbe0e9bc00'
                        key: {
                            name: 'x_2120492_athidhi_reservation'
                            element: 'guest'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '9b6c29375a594e6c8ffd57c02fa8e401'
                        key: {
                            name: 'x_2120492_athidhi_housekeeping_task'
                            element: 'inspection_status'
                            value: 'not_required'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '9b8cf6d303b246cab7f1dd5b324f7078'
                        key: {
                            sys_security_acl: '6be7359e260c4e57b10838b980bed11a'
                            sys_user_role: {
                                id: '240a492786cd43859dd397028582ac16'
                                key: {
                                    name: 'x_2120492_athidhi.receptionist'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9b91794a4bf24dc1bcb5f024f8d78107'
                        key: {
                            name: 'x_2120492_athidhi_housekeeping_task'
                            element: 'assigned_to'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9bf2e12dd19c4da0b8f433b4baa44cf3'
                        key: {
                            name: 'x_2120492_athidhi_inventory_transaction'
                            element: 'transaction_type'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9c3e7a4eab984647ba849fcd912212c2'
                        key: {
                            name: 'x_2120492_athidhi_inventory_transaction'
                            element: 'notes'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '9c52d721a3aa4ea9be3047b738eed0d7'
                        key: {
                            sys_security_acl: '1d20953c74b94a5cb3927f1f34eefe7e'
                            sys_user_role: {
                                id: 'b45ac46436c14974b223c8bff451f7e8'
                                key: {
                                    name: 'x_2120492_athidhi.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '9c8b5e4244f84a4a92f006faff7b1ad1'
                        key: {
                            name: 'x_2120492_athidhi_housekeeping_task'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '9cae4c81039441cbab49bb71c9f16220'
                        key: {
                            name: 'x_2120492_athidhi_reservation'
                            element: 'booking_source'
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: '9cc30c8b1cd4476b806b1d91e257c5b4'
                        key: {
                            sys_ui_action: '920c7b105c26460d8f97c4d294122477'
                            sys_user_role: {
                                id: 'b45ac46436c14974b223c8bff451f7e8'
                                key: {
                                    name: 'x_2120492_athidhi.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '9cd50d100bd84e349393f34e4fe442cc'
                        key: {
                            name: 'x_2120492_athidhi_reservation'
                            element: 'booking_source'
                            value: 'walk_in'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9d7f257e21224304aafbbf19dd612313'
                        key: {
                            name: 'x_2120492_athidhi_housekeeping_task'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9dca7fd1cdca45d08f8e22289edb8a3f'
                        key: {
                            name: 'x_2120492_athidhi_incident'
                            element: 'assigned_to'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '9e185fe14d3344c88b779f5c7fcf94f3'
                        key: {
                            sys_security_acl: '9ed84c72827e4148a2a00ff7c74ff1f1'
                            sys_user_role: {
                                id: '240a492786cd43859dd397028582ac16'
                                key: {
                                    name: 'x_2120492_athidhi.receptionist'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '9e2b8f6f59cc4c68b9da986860bf7e94'
                        key: {
                            name: 'x_2120492_athidhi_food_order_item'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '9e64a71de58b470389adde84ecec10cb'
                        key: {
                            sys_security_acl: '5351c0f20e4f4090ad763f1a9b94d51c'
                            sys_user_role: {
                                id: 'b45ac46436c14974b223c8bff451f7e8'
                                key: {
                                    name: 'x_2120492_athidhi.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9e86482225d04cdb91ba80ccc3225ae1'
                        key: {
                            name: 'x_2120492_athidhi_food_order'
                            element: 'priority'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: '9eb933d173bc4bc0a426e3bd749222bd'
                        key: {
                            sys_ui_action: '2e93ed3246734acf93813f2427a9b462'
                            sys_user_role: {
                                id: '0e2c8b4a8bd0443fb576b6f6b6349fbe'
                                key: {
                                    name: 'x_2120492_athidhi.manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '9eba785c41fe4c41ad22c51a1a1b759e'
                        key: {
                            sys_security_acl: 'b0c9007301db4316b8270951076ba88f'
                            sys_user_role: {
                                id: 'b45ac46436c14974b223c8bff451f7e8'
                                key: {
                                    name: 'x_2120492_athidhi.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '9ee3343dcb644368aaa587f7503f829a'
                        key: {
                            sys_security_acl: 'ad067c0fd2204a76b8b06ad652fba0dd'
                            sys_user_role: {
                                id: 'b45ac46436c14974b223c8bff451f7e8'
                                key: {
                                    name: 'x_2120492_athidhi.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9ef0c6bedb444c2b885c170263704e6c'
                        key: {
                            name: 'x_2120492_athidhi_guest_preference'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9f0125792b014420bab847faeb6e243a'
                        key: {
                            name: 'x_2120492_athidhi_stay'
                            element: 'room'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '9f04ecab185e4c73b8887b02debfc1c3'
                        key: {
                            sys_security_acl: '31f27f36e7f344eb9d23558e3250c542'
                            sys_user_role: {
                                id: 'b45ac46436c14974b223c8bff451f7e8'
                                key: {
                                    name: 'x_2120492_athidhi.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9f3543a9e3eb4bc8aae3f27cdfe911be'
                        key: {
                            name: 'x_2120492_athidhi_room_amenity'
                            element: 'active'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9f79a265e40242f682fac1df141b4109'
                        key: {
                            name: 'x_2120492_athidhi_restaurant'
                            element: 'location'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '9f96e0a05fb0494eb2e2dad20ca2bf30'
                        key: {
                            name: 'x_2120492_athidhi_payment'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '9f9ca90e9f084580b775dd36fa955df4'
                        key: {
                            name: 'x_2120492_athidhi_room_type'
                            element: 'bed_type'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'a01378c3e04b4ca2a98bc3aeb7419ab0'
                        key: {
                            name: 'x_2120492_athidhi_room_amenity'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a03decaf8dab472abc154b724d45161f'
                        key: {
                            name: 'x_2120492_athidhi_service_request'
                            element: 'status'
                            value: 'completed'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a06fe2f4677a44d2ae74b755604db890'
                        key: {
                            name: 'x_2120492_athidhi_ai_interaction_log'
                            element: 'request_category'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a0794c02e09a4c6ab60714f1983bd82d'
                        key: {
                            name: 'x_2120492_athidhi_room_type'
                            element: 'bed_type'
                            value: 'king'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'a0ca86ea6af94e74ba85e94f92127c8a'
                        key: {
                            sys_security_acl: 'a306555f0c0c4591a76f21a00a6f6304'
                            sys_user_role: {
                                id: '8f68f11dd010432ba80972aa8ac2b77d'
                                key: {
                                    name: 'x_2120492_athidhi.housekeeping'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a0e401f5d2ee44acbd2caab30fd70d36'
                        key: {
                            name: 'x_2120492_athidhi_ai_interaction_log'
                            element: 'request_category'
                            value: 'housekeeping'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'a1304a2142af4f18bafa03ed030c7663'
                        key: {
                            sys_security_acl: '33770d0ccb03489596b92bfca053d8df'
                            sys_user_role: {
                                id: '0e2c8b4a8bd0443fb576b6f6b6349fbe'
                                key: {
                                    name: 'x_2120492_athidhi.manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a13746b6474540c89aa5098beaad9c6d'
                        key: {
                            name: 'x_2120492_athidhi_service_request'
                            element: 'status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a16598a046024e95924d50798acd0e4e'
                        key: {
                            name: 'x_2120492_athidhi_food_order'
                            element: 'order_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a1dbf609c8154adfb94dfbcfa53777a3'
                        key: {
                            name: 'x_2120492_athidhi_department'
                            element: 'code'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'a1e4e024075342a898ae3e0d90eeb7a2'
                        key: {
                            name: 'x_2120492_athidhi_food_order'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a22eae8f37b94e9587512688456b116a'
                        key: {
                            name: 'x_2120492_athidhi_maintenance_request'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a282c922abd2451fb820490fa5d6c498'
                        key: {
                            name: 'x_2120492_athidhi_maintenance_request'
                            element: 'category'
                            value: 'electrical'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a2a93ea656ca4448a8a880fab7dc58ad'
                        key: {
                            name: 'x_2120492_athidhi_work_task'
                            element: 'started_at'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a3055f902f1a4eac9727cbb84737b3db'
                        key: {
                            name: 'x_2120492_athidhi_service_request'
                            element: 'due_at'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a30ba45dc8a247e58bef02458917803d'
                        key: {
                            name: 'x_2120492_athidhi_guest'
                            element: 'identification_type'
                            value: 'driving_license'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'a3abb52198a14e1fb9e4913152ed04d3'
                        key: {
                            sys_security_acl: 'f4c728038dfb46368c1bf4ccc26772ae'
                            sys_user_role: {
                                id: '8f68f11dd010432ba80972aa8ac2b77d'
                                key: {
                                    name: 'x_2120492_athidhi.housekeeping'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'a41f56ed14da4d48ae6a00ea30f0780d'
                        key: {
                            sys_security_acl: '21f02e1265084acba8a231b1153d60c4'
                            sys_user_role: {
                                id: 'bd9b587c1f9047609d32f4eea97e73bb'
                                key: {
                                    name: 'x_2120492_athidhi.restaurant'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: 'a4376009e20849e5a190959bdbfc0726'
                        key: {
                            sys_ui_action: 'e8a1b5c2d2484be1a65c82738f653115'
                            sys_user_role: {
                                id: '0e2c8b4a8bd0443fb576b6f6b6349fbe'
                                key: {
                                    name: 'x_2120492_athidhi.manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a43cba367a7b4c4c8d1b2018650c2621'
                        key: {
                            name: 'x_2120492_athidhi_stay'
                            element: 'actual_check_out'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a4619d74f5f845cfbc01f6d4d96ef28b'
                        key: {
                            name: 'x_2120492_athidhi_service_catalog_item'
                            element: 'description'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a4895be1422f4e78bf6ec5042e2772c0'
                        key: {
                            name: 'x_2120492_athidhi_inventory_reorder'
                            element: 'requested_quantity'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a53eeca3583d453a89a75206965131b6'
                        key: {
                            name: 'x_2120492_athidhi_incident'
                            element: 'state'
                            value: 'assigned'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a548b4051d4946bbb2ce667c7e3690bd'
                        key: {
                            name: 'x_2120492_athidhi_food_order'
                            element: 'order_type'
                            value: 'room_service'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a58246f2e67e43f89af03278658f115e'
                        key: {
                            name: 'x_2120492_athidhi_department'
                            element: 'name'
                            value: 'management'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a5acb22e00684c6b9b61aa29cfe03662'
                        key: {
                            name: 'x_2120492_athidhi_work_task'
                            element: 'task_type'
                            value: 'restaurant'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'a5eb191f8bb442bcafa20067518e7aae'
                        key: {
                            sys_security_acl: 'f76b832f789a4de5a9d5548b5bd85294'
                            sys_user_role: {
                                id: 'b45ac46436c14974b223c8bff451f7e8'
                                key: {
                                    name: 'x_2120492_athidhi.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'a610025a56954918893eddd4854480b4'
                        key: {
                            sys_security_acl: 'ff4d6d536ed14135ae4cb6398f31bd27'
                            sys_user_role: {
                                id: '0e2c8b4a8bd0443fb576b6f6b6349fbe'
                                key: {
                                    name: 'x_2120492_athidhi.manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a630bd74fd0e4e55aa8240ef456ae801'
                        key: {
                            name: 'x_2120492_athidhi_service_request'
                            element: 'guest'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a6875e83374e40aeb295a70ac9caaadc'
                        key: {
                            name: 'x_2120492_athidhi_housekeeping_task'
                            element: 'notes'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a7004eaafd124108ba719257b145ba27'
                        key: {
                            name: 'x_2120492_athidhi_maintenance_request'
                            element: 'status'
                            value: 'cancelled'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'a71a4a5d662a448bbbefbb20bb87c954'
                        key: {
                            name: 'x_2120492_athidhi_inventory_item'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a789bd8dac03479ba10ef6e02ebd0b80'
                        key: {
                            name: 'x_2120492_athidhi_payment'
                            element: 'payment_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'a81263febf17422190524ae2674c16c4'
                        key: {
                            sys_security_acl: '1e525e09ab9942ec84acc9c1e6c7eb80'
                            sys_user_role: {
                                id: 'bd9b587c1f9047609d32f4eea97e73bb'
                                key: {
                                    name: 'x_2120492_athidhi.restaurant'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a820d67c42b54fb38447018520f5d674'
                        key: {
                            name: 'x_2120492_athidhi_payment'
                            element: 'notes'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'a83b5df9570a4d69819470a66d30fc56'
                        key: {
                            name: 'x_2120492_athidhi_work_task'
                            element: 'priority'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a83ca8eb103e4dec81d96f9cbf7329a7'
                        key: {
                            name: 'x_2120492_athidhi_ai_interaction_log'
                            element: 'summary'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a84f0c4d0aa244109f638de7fdf58b50'
                        key: {
                            name: 'x_2120492_athidhi_menu'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'a874c89f78b24ee9b27a2faf63ff18b1'
                        key: {
                            sys_security_acl: '9dc22bce09ca4032852287ed9e98a606'
                            sys_user_role: {
                                id: 'b45ac46436c14974b223c8bff451f7e8'
                                key: {
                                    name: 'x_2120492_athidhi.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'a89340f4ade647b78a4713056778a48e'
                        key: {
                            sys_security_acl: '3fd23b86394846eda188461010faa27f'
                            sys_user_role: {
                                id: '7a58b2b3dd1e4586ad7b6fb331fb8788'
                                key: {
                                    name: 'x_2120492_athidhi.guest'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'a8ab5021384e47b4af5f91d6cea102b8'
                        key: {
                            sys_security_acl: '5bb34456766f4dbb827119d09a11f538'
                            sys_user_role: {
                                id: '7a58b2b3dd1e4586ad7b6fb331fb8788'
                                key: {
                                    name: 'x_2120492_athidhi.guest'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a8bcb9358a214f8387e41cbfbaf9ee63'
                        key: {
                            name: 'x_2120492_athidhi_housekeeping_task'
                            element: 'task_number'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a8cc236aa7c4466699bd3e8df085cf6a'
                        key: {
                            name: 'x_2120492_athidhi_menu'
                            element: 'menu_type'
                            value: 'breakfast'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'a8cdd374c63740179f4668802b3d1c55'
                        key: {
                            sys_security_acl: '9b0e2c64920e4a9999336b1f814b982f'
                            sys_user_role: {
                                id: 'b45ac46436c14974b223c8bff451f7e8'
                                key: {
                                    name: 'x_2120492_athidhi.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'a8e9d45e9b89420ca4f587fb8e801668'
                        key: {
                            sys_security_acl: '641e9ef191d54025b868632bb4a58198'
                            sys_user_role: {
                                id: '0e2c8b4a8bd0443fb576b6f6b6349fbe'
                                key: {
                                    name: 'x_2120492_athidhi.manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'a8eb32753afc407296552b4420426e44'
                        key: {
                            name: 'x_2120492_athidhi_staff_profile'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a954f81109d64903849b731b14fa217b'
                        key: {
                            name: 'x_2120492_athidhi_inventory_transaction'
                            element: 'inventory_item'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a95c58685a9f4e8dbfc2edf98a2dd688'
                        key: {
                            name: 'x_2120492_athidhi_service_request'
                            element: 'priority'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a9e8de7df0a843739c5982d844f26015'
                        key: {
                            name: 'x_2120492_athidhi_guest_preference'
                            element: 'guest'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a9f1f2e0180640df9810846a374fdecd'
                        key: {
                            name: 'x_2120492_athidhi_maintenance_request'
                            element: 'resolved_at'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'aa5a98fff4d94903af2091e1c22fa7be'
                        key: {
                            name: 'x_2120492_athidhi_staff_profile'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'aa5dd3e0ca0f4be093d04a70951dfd24'
                        key: {
                            name: 'x_2120492_athidhi_work_task'
                            element: 'completed_at'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'aa75366cc6594e15abecc552e9f4f8f8'
                        key: {
                            name: 'x_2120492_athidhi_housekeeping_task'
                            element: 'priority'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'aa78fa76f3584178abc0b9d714186808'
                        key: {
                            name: 'x_2120492_athidhi_reservation'
                            element: 'check_out'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'aab9aaf0be1d4e03b115cb423656d627'
                        key: {
                            name: 'x_2120492_athidhi_reservation'
                            element: 'special_requests'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'ab074fda2cff4636b2e539e392c34950'
                        key: {
                            name: 'x_2120492_athidhi_reservation'
                            element: 'payment_status'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'ab1a378dada1467a87eee99ebab913b5'
                        key: {
                            sys_security_acl: 'ebfa9d8ac35c4c00afa988762453dc36'
                            sys_user_role: {
                                id: '240a492786cd43859dd397028582ac16'
                                key: {
                                    name: 'x_2120492_athidhi.receptionist'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'ab1e2b4ab7c244908f5c88481b3da0ee'
                        key: {
                            sys_security_acl: 'ffa221d75f564f8d9f0fabe8f8164887'
                            sys_user_role: {
                                id: '7a58b2b3dd1e4586ad7b6fb331fb8788'
                                key: {
                                    name: 'x_2120492_athidhi.guest'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'ab47502cbc4347a69c2272c001fdb64e'
                        key: {
                            sys_security_acl: '9df0f6fda67542c79e03825465571f8b'
                            sys_user_role: {
                                id: 'b45ac46436c14974b223c8bff451f7e8'
                                key: {
                                    name: 'x_2120492_athidhi.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'abc92ee082a04167bf0ce7785f054089'
                        key: {
                            sys_security_acl: '472d3a4f39cf495f8ab22691d314472c'
                            sys_user_role: {
                                id: '7a58b2b3dd1e4586ad7b6fb331fb8788'
                                key: {
                                    name: 'x_2120492_athidhi.guest'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ac40900d97a74fb8b05b781317e724a8'
                        key: {
                            name: 'x_2120492_athidhi_room_type'
                            element: 'active'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'ac4e6121a91948a5bc004916122c208c'
                        key: {
                            name: 'x_2120492_athidhi_service_catalog_item'
                            element: 'category'
                            value: 'transportation'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ac5161e0cbc34b78a4b637d0e56f46a6'
                        key: {
                            name: 'x_2120492_athidhi_menu_item'
                            element: 'preparation_time'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'ac6e9fb6a6b840ab804b7ca9080bf4df'
                        key: {
                            name: 'x_2120492_athidhi_service_request'
                            element: 'request_type'
                            value: 'food_and_beverage'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'aca734673a2044cb8381fa1bb02864d0'
                        key: {
                            name: 'x_2120492_athidhi_guest_preference'
                            element: 'preference_type'
                        }
                    },
                    {
                        table: 'sys_number'
                        id: 'acb4191516f748c18c0a6e932c9f0e52'
                        key: {
                            category: 'x_2120492_athidhi_inventory_transaction'
                            prefix: 'ITX'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'acf5e4737c74402b9a8d1a6ee3638995'
                        key: {
                            name: 'x_2120492_athidhi_room_type'
                            element: 'capacity'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'ad3950a1c3744c23ae0ea19ed4cc5d28'
                        key: {
                            name: 'x_2120492_athidhi_housekeeping_task'
                            element: 'task_type'
                            value: 'deep_cleaning'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ad49da9d0d784f50917afb20fadc833b'
                        key: {
                            name: 'x_2120492_athidhi_food_order_item'
                            element: 'special_instructions'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'ad602fe2fc5c4c319c487991545636fc'
                        key: {
                            name: 'x_2120492_athidhi_payment'
                            element: 'status'
                            value: 'failed'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'ada38ed49ff34de1a2d7a3f872aa0bff'
                        key: {
                            name: 'x_2120492_athidhi_maintenance_request'
                            element: 'priority'
                            value: 'high'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ada3de16f5394b768367ca0cc30f938f'
                        key: {
                            name: 'x_2120492_athidhi_work_task'
                            element: 'resolution_notes'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'add0bce5d94945cbbfbcfda134453ec9'
                        key: {
                            name: 'x_2120492_athidhi_amenity'
                            element: 'category'
                            value: 'accessibility'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'adf69a1cf36241b89610dd8427b44f99'
                        key: {
                            name: 'x_2120492_athidhi_room_type'
                            element: 'bed_type'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'ae6af0d7e50c4038be939ee55e77c3c5'
                        key: {
                            name: 'x_2120492_athidhi_inventory_transaction'
                            element: 'transaction_type'
                            value: 'adjustment'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'ae80f7029fcb47a0b51e5187273c4ad9'
                        key: {
                            sys_security_acl: '81137e087625493f8a3c521fe8dc1fcb'
                            sys_user_role: {
                                id: 'bd9b587c1f9047609d32f4eea97e73bb'
                                key: {
                                    name: 'x_2120492_athidhi.restaurant'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'ae818659ed6d446fa618c2024904bca2'
                        key: {
                            name: 'x_2120492_athidhi_service_request'
                            element: 'priority'
                            value: 'high'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'ae89d0eb4d904a70b1d42e0973f833b4'
                        key: {
                            sys_security_acl: '9b0e2c64920e4a9999336b1f814b982f'
                            sys_user_role: {
                                id: '240a492786cd43859dd397028582ac16'
                                key: {
                                    name: 'x_2120492_athidhi.receptionist'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'aee89a5108ed4c39b8817144de58347b'
                        key: {
                            name: 'x_2120492_athidhi_ai_interaction_log'
                            element: 'action_result'
                            value: 'SUCCESS'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'af467668665b4870b4565db7d361a771'
                        key: {
                            name: 'x_2120492_athidhi_incident'
                            element: 'state'
                        }
                    },
                    {
                        table: 'sys_number'
                        id: 'af8557d753db4ef289ab2f832512cd36'
                        key: {
                            category: 'x_2120492_athidhi_amenity'
                            prefix: 'AMN'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'afaac19ba45f4878a1767e09fefd395c'
                        key: {
                            name: 'x_2120492_athidhi_incident'
                            element: 'category'
                            value: 'technical'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'afdd04c32b9b4d238ca61d6d92805ef1'
                        key: {
                            sys_security_acl: '31f27f36e7f344eb9d23558e3250c542'
                            sys_user_role: {
                                id: '240a492786cd43859dd397028582ac16'
                                key: {
                                    name: 'x_2120492_athidhi.receptionist'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'aff955dba6cf433cbe653febd6b18c3d'
                        key: {
                            sys_security_acl: '3b52f6fa4021465ca9c09b905006c22b'
                            sys_user_role: {
                                id: '0e2c8b4a8bd0443fb576b6f6b6349fbe'
                                key: {
                                    name: 'x_2120492_athidhi.manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'b030061b35884c71b9892b58b5e70b0c'
                        key: {
                            sys_security_acl: 'ecd1a44e7ff1491f87d38c0138670b4e'
                            sys_user_role: {
                                id: 'bd9b587c1f9047609d32f4eea97e73bb'
                                key: {
                                    name: 'x_2120492_athidhi.restaurant'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'b06098a432be402e8d04241f865fe1f0'
                        key: {
                            name: 'x_2120492_athidhi_guest_preference'
                            element: 'preference_type'
                            value: 'food'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b0990ff6b342477cb83beac9a0dea2c9'
                        key: {
                            name: 'x_2120492_athidhi_ai_interaction_log'
                            element: 'provider'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b0e4b99efa434fff9173e2a913f2bd62'
                        key: {
                            name: 'x_2120492_athidhi_inventory_reorder'
                            element: 'inventory_item'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b111049a597244488bc826b7dd96bdc4'
                        key: {
                            name: 'x_2120492_athidhi_food_order_item'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'b114c8992f2f4854826b6ea4926356e0'
                        key: {
                            name: 'x_2120492_athidhi_inventory_item'
                            element: 'category'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'b1259ac4a7854d5198439b5a17eba650'
                        key: {
                            sys_security_acl: 'b58ecb147c364ccbbab54329ab0eb127'
                            sys_user_role: {
                                id: '240a492786cd43859dd397028582ac16'
                                key: {
                                    name: 'x_2120492_athidhi.receptionist'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b15d837eaf0c4d04bf5503c4d3ed253a'
                        key: {
                            name: 'x_2120492_athidhi_room'
                            element: 'occupancy_status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'b16ab94361d7418a954a7cb47191f215'
                        key: {
                            sys_security_acl: '868de81b3f17463f99253131c8de2bce'
                            sys_user_role: {
                                id: 'b45ac46436c14974b223c8bff451f7e8'
                                key: {
                                    name: 'x_2120492_athidhi.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'b18b2028c5ee4374ab5aac3e3203f046'
                        key: {
                            sys_security_acl: 'a306555f0c0c4591a76f21a00a6f6304'
                            sys_user_role: {
                                id: '0e2c8b4a8bd0443fb576b6f6b6349fbe'
                                key: {
                                    name: 'x_2120492_athidhi.manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b1f124a296e0439f9370ca77b5aeeba7'
                        key: {
                            name: 'x_2120492_athidhi_service_catalog_item'
                            element: 'department'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b20c046b814747dbb7ddb8463544d10a'
                        key: {
                            name: 'x_2120492_athidhi_inventory_reorder'
                            element: 'requested_at'
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: 'b20d64dad2654e50b229411465f88164'
                        key: {
                            sys_ui_action: '8765fdf58afd4e07b0a75b90d3c5dabb'
                            sys_user_role: {
                                id: '0e2c8b4a8bd0443fb576b6f6b6349fbe'
                                key: {
                                    name: 'x_2120492_athidhi.manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'b23fd6fb5d144e7399f034d769242bd7'
                        key: {
                            sys_security_acl: '43b91e08d376461db98b6eab6a2c550f'
                            sys_user_role: {
                                id: '0e2c8b4a8bd0443fb576b6f6b6349fbe'
                                key: {
                                    name: 'x_2120492_athidhi.manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b25206c871b54bfbb5d438a3e0234e16'
                        key: {
                            name: 'x_2120492_athidhi_stay'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'b2581fab79cc4951af9dc8a47eaea1ab'
                        key: {
                            sys_security_acl: 'ce0d69e096c44fada29623828427b611'
                            sys_user_role: {
                                id: '0e2c8b4a8bd0443fb576b6f6b6349fbe'
                                key: {
                                    name: 'x_2120492_athidhi.manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b2620631d50b40fa9511105bc3e1a26a'
                        key: {
                            name: 'x_2120492_athidhi_reservation'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'b2ce4bc6ccbb4669be194b20d092ef73'
                        key: {
                            sys_security_acl: 'fe596eb42378451484cc9491ed74100a'
                            sys_user_role: {
                                id: 'b45ac46436c14974b223c8bff451f7e8'
                                key: {
                                    name: 'x_2120492_athidhi.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b2d784de5250491e85c3af292023146a'
                        key: {
                            name: 'x_2120492_athidhi_room_amenity'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'b2f17d401d1d4230a70c0e545fac49de'
                        key: {
                            name: 'x_2120492_athidhi_work_task'
                            element: 'state'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b31a9b21e3fe43dfa2016a26c0585847'
                        key: {
                            name: 'x_2120492_athidhi_menu_item'
                            element: 'preparation_time'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'b35e9a71501b4faf93fa062117f92a81'
                        key: {
                            name: 'x_2120492_athidhi_housekeeping_task'
                            element: 'inspection_status'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'b3623ae002064612a52b1c9ba7fb055c'
                        key: {
                            name: 'x_2120492_athidhi_department'
                            element: 'name'
                            value: 'front_desk'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'b36e29195f1c42cda9c46e6eff845286'
                        key: {
                            sys_security_acl: '40956c897f3e4f44863dad8bc11d562c'
                            sys_user_role: {
                                id: '0e2c8b4a8bd0443fb576b6f6b6349fbe'
                                key: {
                                    name: 'x_2120492_athidhi.manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b39c2d901d8d47dab1001c36c406fa94'
                        key: {
                            name: 'x_2120492_athidhi_maintenance_request'
                            element: 'resolved_at'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b3dbb4b0aa2b433faad0b0ef53a22cc8'
                        key: {
                            name: 'x_2120492_athidhi_food_order_item'
                            element: 'special_instructions'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b430873326f94c8baa362804daa6abfb'
                        key: {
                            name: 'x_2120492_athidhi_room'
                            element: 'notes'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b43754cc67764a8d8e48566482104132'
                        key: {
                            name: 'x_2120492_athidhi_menu'
                            element: 'active'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'b44a1bbe97634517a6ba1a1fea729953'
                        key: {
                            sys_security_acl: 'abf52eba48394e57bfc451c7fe577675'
                            sys_user_role: {
                                id: '0e2c8b4a8bd0443fb576b6f6b6349fbe'
                                key: {
                                    name: 'x_2120492_athidhi.manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: 'b45ac46436c14974b223c8bff451f7e8'
                        key: {
                            name: 'x_2120492_athidhi.admin'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'b49d7b3757d4442dbf975771738c8bf6'
                        key: {
                            sys_security_acl: 'ce0d69e096c44fada29623828427b611'
                            sys_user_role: {
                                id: 'bd9b587c1f9047609d32f4eea97e73bb'
                                key: {
                                    name: 'x_2120492_athidhi.restaurant'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b4cdcd0c4416499ca2586454406562ea'
                        key: {
                            name: 'x_2120492_athidhi_guest'
                            element: 'state'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'b5170b01f4ba4f059476272395cba9d1'
                        key: {
                            sys_security_acl: '50e65ae74321493499f4cbed47ad13b5'
                            sys_user_role: {
                                id: 'b45ac46436c14974b223c8bff451f7e8'
                                key: {
                                    name: 'x_2120492_athidhi.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'b530c3b8943a4e63845668b619f9b38a'
                        key: {
                            sys_security_acl: '40956c897f3e4f44863dad8bc11d562c'
                            sys_user_role: {
                                id: '240a492786cd43859dd397028582ac16'
                                key: {
                                    name: 'x_2120492_athidhi.receptionist'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b557e20145b14dbda0d8074f4ed628b3'
                        key: {
                            name: 'x_2120492_athidhi_room_amenity'
                            element: 'amenity'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'b560e1fb282e40a08c18b23e9b0e866f'
                        key: {
                            name: 'x_2120492_athidhi_housekeeping_task'
                            element: 'priority'
                            value: 'low'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'b5a051ef99ad4e48b31628e2a98577af'
                        key: {
                            name: 'x_2120492_athidhi_guest_preference'
                            element: 'preference_type'
                            value: 'accessibility'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'b5da2d9c9619448082acb07fbb1193fc'
                        key: {
                            sys_security_acl: '4edbf697f7cf432dbf3d2af8fce86c67'
                            sys_user_role: {
                                id: '0e2c8b4a8bd0443fb576b6f6b6349fbe'
                                key: {
                                    name: 'x_2120492_athidhi.manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'b60ddda32260409880e93f649d9a90aa'
                        key: {
                            sys_security_acl: '718e0b6d9dbc45c0bc99fdca55ab12fc'
                            sys_user_role: {
                                id: '0e2c8b4a8bd0443fb576b6f6b6349fbe'
                                key: {
                                    name: 'x_2120492_athidhi.manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'b62c28bc757f46f98040ced82e008fce'
                        key: {
                            sys_security_acl: '6eda963ae99648949767e148c7cd0c50'
                            sys_user_role: {
                                id: 'b45ac46436c14974b223c8bff451f7e8'
                                key: {
                                    name: 'x_2120492_athidhi.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b63035530d234536a038be465b2e5c50'
                        key: {
                            name: 'x_2120492_athidhi_menu_item'
                            element: 'menu'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b682a1da4044482586e6c80bdba810ba'
                        key: {
                            name: 'x_2120492_athidhi_menu_item'
                            element: 'category'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b68671161b954e8d9f66452e3ba3e186'
                        key: {
                            name: 'x_2120492_athidhi_department'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'b68d12b284a04cc6bc6701f5a37e8c79'
                        key: {
                            name: 'x_2120492_athidhi_ai_interaction_log'
                            element: 'request_category'
                            value: 'maintenance'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'b6a8cfa6f39c4bb582c7ab4764fee5f2'
                        key: {
                            sys_security_acl: 'abf52eba48394e57bfc451c7fe577675'
                            sys_user_role: {
                                id: '8f68f11dd010432ba80972aa8ac2b77d'
                                key: {
                                    name: 'x_2120492_athidhi.housekeeping'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b6bfad5217b74fa690080102d744bf13'
                        key: {
                            name: 'x_2120492_athidhi_food_order'
                            element: 'requested_delivery_time'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'b6e4ec0704c24f3a9afaae1db7a4e768'
                        key: {
                            name: 'x_2120492_athidhi_guest_preference'
                            element: 'preference_type'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b724b5ede2f74a129390c3a89bc344ae'
                        key: {
                            name: 'x_2120492_athidhi_food_order'
                            element: 'special_instructions'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b78a48c90da64523a92686ab4005d318'
                        key: {
                            name: 'x_2120492_athidhi_housekeeping_task'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b79fe1ab8a4f4dc7bde40244e7c21ac4'
                        key: {
                            name: 'x_2120492_athidhi_room_type'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'b7c8c65bdf924a72b13067b52dadf8c2'
                        key: {
                            name: 'x_2120492_athidhi_guest'
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: 'b82aad6f0c4047de82d605835ed6e6e6'
                        key: {
                            sys_ui_action: '33b5c60faf4d481686046d1f8f2e771a'
                            sys_user_role: {
                                id: '0e2c8b4a8bd0443fb576b6f6b6349fbe'
                                key: {
                                    name: 'x_2120492_athidhi.manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'b82b33277bf24fbb9fbbfc6c244a3478'
                        key: {
                            sys_security_acl: '3c36adabd1ff4ef282011aee65e4e931'
                            sys_user_role: {
                                id: 'b45ac46436c14974b223c8bff451f7e8'
                                key: {
                                    name: 'x_2120492_athidhi.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'b8e45ec5a61d41ccb2bddafa0f424275'
                        key: {
                            sys_security_acl: '346e645b5ba241aa8a0e4e347d73580b'
                            sys_user_role: {
                                id: '240a492786cd43859dd397028582ac16'
                                key: {
                                    name: 'x_2120492_athidhi.receptionist'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'b903070fee564794954d0fcc66a287eb'
                        key: {
                            sys_security_acl: 'ad067c0fd2204a76b8b06ad652fba0dd'
                            sys_user_role: {
                                id: '0e2c8b4a8bd0443fb576b6f6b6349fbe'
                                key: {
                                    name: 'x_2120492_athidhi.manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b908fb776e96410699a1c668497a5a6c'
                        key: {
                            name: 'x_2120492_athidhi_stay'
                            element: 'reservation'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b91ac2230e5940ff86a68ae823c20108'
                        key: {
                            name: 'x_2120492_athidhi_reservation'
                            element: 'special_requests'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b9223fb61ad6413988913d0330732aa5'
                        key: {
                            name: 'x_2120492_athidhi_ai_interaction_log'
                            element: 'request_category'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b95fc6be47e64083a964cbc5ac0bcbac'
                        key: {
                            name: 'x_2120492_athidhi_menu'
                            element: 'valid_from'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'b96236254aa449cbb074c8373af95313'
                        key: {
                            sys_security_acl: 'de8322dfd365426d81aa0ce1e23a53a9'
                            sys_user_role: {
                                id: 'b45ac46436c14974b223c8bff451f7e8'
                                key: {
                                    name: 'x_2120492_athidhi.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b9625c5c3d774221849cf8f3f73e2821'
                        key: {
                            name: 'x_2120492_athidhi_room_amenity'
                            element: 'notes'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b9af2275a2f545689e679242a148dda6'
                        key: {
                            name: 'x_2120492_athidhi_food_order'
                            element: 'total'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b9b7628f3be4470984ca8362540dffc4'
                        key: {
                            name: 'x_2120492_athidhi_service_request_item'
                            element: 'notes'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'b9c16d7b5da143529febac9c2036fde1'
                        key: {
                            name: 'x_2120492_athidhi_service_catalog_item'
                            element: 'default_priority'
                            value: 'critical'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'b9eea08840454fb1afdde77e8f9867d1'
                        key: {
                            sys_security_acl: 'ed3ca82ec2404c57a1691b928c4dca48'
                            sys_user_role: {
                                id: '0e2c8b4a8bd0443fb576b6f6b6349fbe'
                                key: {
                                    name: 'x_2120492_athidhi.manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'ba0faa8f0d4147c8bcec0b3d8730f45e'
                        key: {
                            sys_security_acl: '9bcf835595d84307b7b0b224c12aed03'
                            sys_user_role: {
                                id: '0e2c8b4a8bd0443fb576b6f6b6349fbe'
                                key: {
                                    name: 'x_2120492_athidhi.manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'ba2c0161eb2a46a5a3f64657575ad719'
                        key: {
                            sys_security_acl: '3cceb82569b44319ab71423345b72806'
                            sys_user_role: {
                                id: '0e2c8b4a8bd0443fb576b6f6b6349fbe'
                                key: {
                                    name: 'x_2120492_athidhi.manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ba5bae47da654d39a41ae4258dd742ae'
                        key: {
                            name: 'x_2120492_athidhi_guest'
                            element: 'city'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'ba9a1d5b360546d29b03cdb1b0a13d29'
                        key: {
                            name: 'x_2120492_athidhi_reservation'
                            element: 'booking_source'
                            value: 'phone'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'bac406de09fe4ca6bca397d622fecb55'
                        key: {
                            name: 'x_2120492_athidhi_service_catalog_item'
                            element: 'estimated_minutes'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'bac81888c96f4b96aba6f4884b1262b5'
                        key: {
                            sys_security_acl: '9f0fca3f21484ded8d59597432482f78'
                            sys_user_role: {
                                id: '0e2c8b4a8bd0443fb576b6f6b6349fbe'
                                key: {
                                    name: 'x_2120492_athidhi.manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'bae57887f6b24f55922bf6963026ed6e'
                        key: {
                            name: 'x_2120492_athidhi_housekeeping_task'
                            element: 'inspection_required'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'bafc9c2af72e4f3da106643e68d3a392'
                        key: {
                            sys_security_acl: 'b58ecb147c364ccbbab54329ab0eb127'
                            sys_user_role: {
                                id: '8f68f11dd010432ba80972aa8ac2b77d'
                                key: {
                                    name: 'x_2120492_athidhi.housekeeping'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'bb080ba124604c2a82344ef2bff0203f'
                        key: {
                            name: 'x_2120492_athidhi_department'
                            element: 'active'
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: 'bb0dc1781b3d47fabc0dd941c4dc6784'
                        key: {
                            sys_ui_action: '33b5c60faf4d481686046d1f8f2e771a'
                            sys_user_role: {
                                id: '3e9f6959b3014deca7ed1004952c0462'
                                key: {
                                    name: 'x_2120492_athidhi.maintenance'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'bb128dd21b444e09b375b1163469d391'
                        key: {
                            name: 'x_2120492_athidhi_housekeeping_task'
                            element: 'priority'
                            value: 'medium'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'bb417b4807f647b381ab579731340868'
                        key: {
                            sys_security_acl: '77be7c08b2bb480b8df23726ba2993cf'
                            sys_user_role: {
                                id: '7a58b2b3dd1e4586ad7b6fb331fb8788'
                                key: {
                                    name: 'x_2120492_athidhi.guest'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'bb7bf57caa9f4f81a42e16b54e6c7ec2'
                        key: {
                            sys_security_acl: 'abf52eba48394e57bfc451c7fe577675'
                            sys_user_role: {
                                id: '3e9f6959b3014deca7ed1004952c0462'
                                key: {
                                    name: 'x_2120492_athidhi.maintenance'
                                }
                            }
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'bb86c60d57ff4385b13a7e93f7086092'
                        key: {
                            name: 'x_2120492_athidhi_amenity'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'bba07815deb045bb9cce0d159d40ed99'
                        key: {
                            name: 'x_2120492_athidhi_staff_profile'
                            element: 'employee'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'bbd4961f020b44ff8049537cf3f30659'
                        key: {
                            name: 'x_2120492_athidhi_payment'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'bc24e495c2544d59922467bacb5d7776'
                        key: {
                            name: 'x_2120492_athidhi_guest_preference'
                            element: 'active'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'bc545522cb484c33a4e6f4187c263569'
                        key: {
                            name: 'x_2120492_athidhi_service_request_item'
                            element: 'unit_price'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'bc5b56c1b2c94eaab74c1154319d8035'
                        key: {
                            name: 'x_2120492_athidhi_inventory_transaction'
                            element: 'performed_by'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'bca6f36bf65a4c318fbeabcc13ac6759'
                        key: {
                            name: 'x_2120492_athidhi_reservation'
                            element: 'status'
                            value: 'confirmed'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'bd20cbccc0c040ce95d9bf0068e3fbf3'
                        key: {
                            name: 'x_2120492_athidhi_inventory_item'
                            element: 'name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'bd29544d4bf74f86bbc0a712051af612'
                        key: {
                            name: 'x_2120492_athidhi_maintenance_request'
                            element: 'resolution_notes'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: 'bd9b587c1f9047609d32f4eea97e73bb'
                        key: {
                            name: 'x_2120492_athidhi.restaurant'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'bd9c918b7a7c4fc8a8de1f94664ffd87'
                        key: {
                            name: 'x_2120492_athidhi_stay'
                            element: 'actual_check_in'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'bd9fda3c29ec46049662c416031093d9'
                        key: {
                            name: 'x_2120492_athidhi_service_request_item'
                            element: 'catalog_item'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'bdf521116c5b4df6bcb7b99fd837c351'
                        key: {
                            sys_security_acl: '3c36adabd1ff4ef282011aee65e4e931'
                            sys_user_role: {
                                id: '8f68f11dd010432ba80972aa8ac2b77d'
                                key: {
                                    name: 'x_2120492_athidhi.housekeeping'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'bdfe3522b6954fa2a74de9ac4541c7d5'
                        key: {
                            name: 'x_2120492_athidhi_room_type'
                            element: 'amenities'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'be1ac8fe24de456980fa7b9dc3fe3fa0'
                        key: {
                            name: 'x_2120492_athidhi_amenity'
                            element: 'category'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'bea002bb7a2c483e88eccd7fd5880a97'
                        key: {
                            name: 'x_2120492_athidhi_stay'
                            element: 'status'
                            value: 'scheduled'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'bea628d94ef34db69aea62e84fae634c'
                        key: {
                            name: 'x_2120492_athidhi_inventory_reorder'
                            element: 'requested_by'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'bea9f1f0135b42efbe6d8f07edca099f'
                        key: {
                            sys_security_acl: '080ef90c9e04455e8c42500356f14bb9'
                            sys_user_role: {
                                id: '0e2c8b4a8bd0443fb576b6f6b6349fbe'
                                key: {
                                    name: 'x_2120492_athidhi.manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'bef1cea427cd447da6664d0d38b3d6fa'
                        key: {
                            name: 'x_2120492_athidhi_amenity'
                            element: 'category'
                            value: 'recreation'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'bf49d6bd8a4844f5a2db5faafa1f2020'
                        key: {
                            name: 'x_2120492_athidhi_room_type'
                            element: 'description'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'bf7695b3e12046bdbf1f6130cfe6c1bd'
                        key: {
                            sys_security_acl: 'cd674332b9fe46cda4681c141bf888c6'
                            sys_user_role: {
                                id: '0e2c8b4a8bd0443fb576b6f6b6349fbe'
                                key: {
                                    name: 'x_2120492_athidhi.manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'bfdc1abe596e40e2b8df39afc0c9a8ea'
                        key: {
                            name: 'x_2120492_athidhi_inventory_reorder'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'bfeac9258de54757bead43d528742661'
                        key: {
                            name: 'x_2120492_athidhi_work_task'
                            element: 'assignment_group'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'bffc7455b66f4ef0987790e312022614'
                        key: {
                            name: 'x_2120492_athidhi_service_request'
                            element: 'charge'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'c00e5bc9318d4637bb6a7010478c0b38'
                        key: {
                            name: 'x_2120492_athidhi_guest'
                            element: 'loyalty_tier'
                            value: 'standard'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'c022f702920f4cd08781da98e2212f2d'
                        key: {
                            name: 'x_2120492_athidhi_service_request'
                            element: 'request_type'
                            value: 'transportation'
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: 'c0243db48d4d433b99affbe511b1cd74'
                        key: {
                            sys_ui_action: '591e5f4dcbdb4cabb4323631fed8f9a9'
                            sys_user_role: {
                                id: '0e2c8b4a8bd0443fb576b6f6b6349fbe'
                                key: {
                                    name: 'x_2120492_athidhi.manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'c02e886263594965bdfaa6c2757a43d1'
                        key: {
                            sys_security_acl: '1e8acc49ba7f4400b07b9883cc5636ca'
                            sys_user_role: {
                                id: '0e2c8b4a8bd0443fb576b6f6b6349fbe'
                                key: {
                                    name: 'x_2120492_athidhi.manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c04d79570e5343fdb3eb5fcbfbafc39f'
                        key: {
                            name: 'x_2120492_athidhi_stay'
                            element: 'children'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c0c2fbc598fd4ba39c4f369fce222ed4'
                        key: {
                            name: 'x_2120492_athidhi_incident'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c0fc443e7b774a88a4b61b02e488e9d9'
                        key: {
                            name: 'x_2120492_athidhi_work_task'
                            element: 'task_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c10c4fc3ce49427d8befe441cad5fa72'
                        key: {
                            name: 'x_2120492_athidhi_incident'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'c1b3049165434bd09838454acb5bd571'
                        key: {
                            sys_security_acl: '6f6b6638745d42828a7cd1f9c29d187d'
                            sys_user_role: {
                                id: '7a58b2b3dd1e4586ad7b6fb331fb8788'
                                key: {
                                    name: 'x_2120492_athidhi.guest'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'c1bf585191e14a8a96d8e7a67b097f10'
                        key: {
                            sys_security_acl: '625bfd1547b44ba6a011585fc8cc2d5a'
                            sys_user_role: {
                                id: '240a492786cd43859dd397028582ac16'
                                key: {
                                    name: 'x_2120492_athidhi.receptionist'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c1c2c8b99c1f44ad8ddaebe1f96137db'
                        key: {
                            name: 'x_2120492_athidhi_work_task'
                            element: 'service_request'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'c1f595a6ab2743c8bd0128d0b0befa7c'
                        key: {
                            sys_security_acl: 'da015fcfc3b34163b569042329b63b80'
                            sys_user_role: {
                                id: '7a58b2b3dd1e4586ad7b6fb331fb8788'
                                key: {
                                    name: 'x_2120492_athidhi.guest'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'c220189a3ea348288b767792d2e1c17c'
                        key: {
                            name: 'x_2120492_athidhi_food_order'
                            element: 'priority'
                            value: 'normal'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c2d3eacb599e49848c6be4d1d9db246d'
                        key: {
                            name: 'x_2120492_athidhi_restaurant'
                            element: 'closing_time'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'c3272ab9719a4140920b3c94566deb2c'
                        key: {
                            name: 'x_2120492_athidhi_menu_item'
                            element: 'dietary_type'
                            value: 'gluten_free'
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: 'c35d5bd0683f40a7a4dc41e34c8a4569'
                        key: {
                            sys_ui_action: '7a80e24564004431bcecfb96c348e22f'
                            sys_user_role: {
                                id: '0e2c8b4a8bd0443fb576b6f6b6349fbe'
                                key: {
                                    name: 'x_2120492_athidhi.manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c3938e08d89a4192b86389202496938e'
                        key: {
                            name: 'x_2120492_athidhi_housekeeping_task'
                            element: 'room'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c3a26284feaf4fcd91cf45b0a1c13bf0'
                        key: {
                            name: 'x_2120492_athidhi_maintenance_request'
                            element: 'category'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'c466e6cba22c4f748e0a268589048358'
                        key: {
                            name: 'x_2120492_athidhi_inventory_reorder'
                            element: 'status'
                            value: 'requested'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c46dc52107fc4f08be80207c2cb025a9'
                        key: {
                            name: 'x_2120492_athidhi_inventory_transaction'
                            element: 'transaction_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'c47fbc8046374dbe960aab14adf6129e'
                        key: {
                            sys_security_acl: '9ed84c72827e4148a2a00ff7c74ff1f1'
                            sys_user_role: {
                                id: 'b45ac46436c14974b223c8bff451f7e8'
                                key: {
                                    name: 'x_2120492_athidhi.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'c49c442b799540a9960d25f839794861'
                        key: {
                            sys_security_acl: '31f27f36e7f344eb9d23558e3250c542'
                            sys_user_role: {
                                id: '3e9f6959b3014deca7ed1004952c0462'
                                key: {
                                    name: 'x_2120492_athidhi.maintenance'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'c4b5aec656484858b220963ed3b5cf55'
                        key: {
                            sys_security_acl: '442f187c3557410c86acc44001111bbd'
                            sys_user_role: {
                                id: 'b45ac46436c14974b223c8bff451f7e8'
                                key: {
                                    name: 'x_2120492_athidhi.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: 'c4f336bac9db4207b26a548847866d55'
                        key: {
                            sys_ui_action: 'e8a1b5c2d2484be1a65c82738f653115'
                            sys_user_role: {
                                id: 'b45ac46436c14974b223c8bff451f7e8'
                                key: {
                                    name: 'x_2120492_athidhi.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'c50947cf75204ee090851bbe1b64ed0e'
                        key: {
                            name: 'x_2120492_athidhi_menu_item'
                            element: 'category'
                            value: 'side'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c51efa30b160407283d7c48f5d5e2005'
                        key: {
                            name: 'x_2120492_athidhi_service_catalog_item'
                            element: 'price'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c5d301ff177546aaabf4e5a07f1c3d1f'
                        key: {
                            name: 'x_2120492_athidhi_housekeeping_task'
                            element: 'room'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c5dfe68f39ce42619f6ce3b829f659b2'
                        key: {
                            name: 'x_2120492_athidhi_service_request'
                            element: 'due_at'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'c6399841887b40408a7866a1aefef033'
                        key: {
                            name: 'x_2120492_athidhi_service_catalog_item'
                            element: 'category'
                            value: 'concierge'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c642682591de424980f85172335ab486'
                        key: {
                            name: 'x_2120492_athidhi_stay'
                            element: 'actual_check_out'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'c65da8df70424084939d4ad6d77a7a29'
                        key: {
                            name: 'x_2120492_athidhi_maintenance_request'
                            element: 'category'
                            value: 'plumbing'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c6607abed5a94153b91792d73dcc3e55'
                        key: {
                            name: 'x_2120492_athidhi_work_task'
                            element: 'assignment_group'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'c6841a42b09a4545a530d17591e12c77'
                        key: {
                            name: 'x_2120492_athidhi_service_catalog_item'
                            element: 'default_priority'
                            value: 'medium'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'c6dcea942f7749a28f29b62cc107e69b'
                        key: {
                            sys_security_acl: '1e525e09ab9942ec84acc9c1e6c7eb80'
                            sys_user_role: {
                                id: 'b45ac46436c14974b223c8bff451f7e8'
                                key: {
                                    name: 'x_2120492_athidhi.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'c6f9550216ed4a50b298680b88a37748'
                        key: {
                            name: 'x_2120492_athidhi_amenity'
                            element: 'category'
                            value: 'business'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'c7212019ebfd479d928c97b7e493103c'
                        key: {
                            sys_security_acl: '9c2d7c511852420fba2aed5622693931'
                            sys_user_role: {
                                id: '7a58b2b3dd1e4586ad7b6fb331fb8788'
                                key: {
                                    name: 'x_2120492_athidhi.guest'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c7261182095b4ec78990e528a3dd936e'
                        key: {
                            name: 'x_2120492_athidhi_work_task'
                            element: 'completed_at'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'c734c274305e4e9bac90a42b5370d774'
                        key: {
                            name: 'x_2120492_athidhi_work_task'
                            element: 'task_type'
                            value: 'concierge'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'c74dc6e3c0d349b09aeaa93d09691259'
                        key: {
                            sys_security_acl: 'e387c99b072d4688a6a635b2d8f306d7'
                            sys_user_role: {
                                id: 'b45ac46436c14974b223c8bff451f7e8'
                                key: {
                                    name: 'x_2120492_athidhi.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c885ef4042a5457c83b93b311af5be3b'
                        key: {
                            name: 'x_2120492_athidhi_stay'
                            element: 'guest'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'c92d0e9c1c0f4ecbb200240cf203ab04'
                        key: {
                            name: 'x_2120492_athidhi_ai_interaction_log'
                            element: 'request_category'
                            value: 'reservation'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ca1a3aa380304cddaf23b3d6fbaa7c7b'
                        key: {
                            name: 'x_2120492_athidhi_food_order_item'
                            element: 'unit_price'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'ca9c99042a254468947a4c5672f3bb29'
                        key: {
                            name: 'x_2120492_athidhi_guest'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'caa5e4582d464675a6e94288e0e0768b'
                        key: {
                            name: 'x_2120492_athidhi_inventory_reorder'
                            element: 'notes'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'cb1367fd4cdd44f6bab0ba127c311646'
                        key: {
                            name: 'x_2120492_athidhi_work_task'
                            element: 'priority'
                            value: 'low'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'cb45ef41f03c43d8b2164359cca81ad0'
                        key: {
                            sys_security_acl: 'baa1409b34454e8d93e7b93b0c4cba48'
                            sys_user_role: {
                                id: '0e2c8b4a8bd0443fb576b6f6b6349fbe'
                                key: {
                                    name: 'x_2120492_athidhi.manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'cb465888c3924245b471011b13d08339'
                        key: {
                            name: 'x_2120492_athidhi_ai_interaction_log'
                            element: 'log_number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'cb4dcd9542a348ebbf136865b7f7ea48'
                        key: {
                            name: 'x_2120492_athidhi_food_order'
                            element: 'restaurant'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'cbe272a132a4469a82b3385acca50352'
                        key: {
                            name: 'x_2120492_athidhi_amenity'
                            element: 'category'
                            value: 'bathroom'
                        }
                    },
                    {
                        table: 'sys_number'
                        id: 'cc37a34f5cc0481cbb20e629bcd9af47'
                        key: {
                            category: 'x_2120492_athidhi_department'
                            prefix: 'DEP'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'cc9f77f7380142a7a43ded431d687b45'
                        key: {
                            sys_security_acl: '6eda963ae99648949767e148c7cd0c50'
                            sys_user_role: {
                                id: '8f68f11dd010432ba80972aa8ac2b77d'
                                key: {
                                    name: 'x_2120492_athidhi.housekeeping'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'cd490e5f08144f9c833de036334c5779'
                        key: {
                            name: 'x_2120492_athidhi_staff_profile'
                            element: 'employee'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'cd55d37fdf1f4ea7ac47d52f77e1b2db'
                        key: {
                            name: 'x_2120492_athidhi_inventory_item'
                            element: 'storage_location'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'cd7b6ca27f21471bb1c7d5c02bdb960d'
                        key: {
                            name: 'x_2120492_athidhi_room'
                            element: 'housekeeping_status'
                            value: 'inspected'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'cd8ad12f1ba048a3a0760d882b871cd0'
                        key: {
                            sys_security_acl: 'c2adf0c3035d4464ac11a09bb2d7a38b'
                            sys_user_role: {
                                id: 'b45ac46436c14974b223c8bff451f7e8'
                                key: {
                                    name: 'x_2120492_athidhi.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'ce0428b77844427795ba52bf1eca940b'
                        key: {
                            sys_security_acl: '78b24b1238da4b4c8c6a11617bb92b14'
                            sys_user_role: {
                                id: 'bd9b587c1f9047609d32f4eea97e73bb'
                                key: {
                                    name: 'x_2120492_athidhi.restaurant'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_page'
                        id: 'ce0d9423d5874a71b7fd93bf4098a099'
                        key: {
                            endpoint: 'x_2120492_athidhi_housekeeping_workspace.do'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'cef3bbe02a2447618b10b42175a0aa83'
                        key: {
                            name: 'x_2120492_athidhi_ai_interaction_log'
                            element: 'error_category'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'cef5a99d96894d309bf246eb41dd1d8e'
                        key: {
                            name: 'x_2120492_athidhi_service_request_item'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'cf06350397c44461b89b59c5968a333f'
                        key: {
                            name: 'x_2120492_athidhi_food_order'
                            element: 'guest'
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: 'cf2322a68c874e208f32692abbedb9db'
                        key: {
                            sys_ui_action: 'e8a1b5c2d2484be1a65c82738f653115'
                            sys_user_role: {
                                id: 'bd9b587c1f9047609d32f4eea97e73bb'
                                key: {
                                    name: 'x_2120492_athidhi.restaurant'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'cf44b7fa21c84b50b1d92414c5ec4629'
                        key: {
                            name: 'x_2120492_athidhi_room_type'
                            element: 'name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'cf4e566d5a454b87a0cdd6fbc3a625b4'
                        key: {
                            sys_security_acl: '787aa58f789a412ca81e624277ad99f3'
                            sys_user_role: {
                                id: '0e2c8b4a8bd0443fb576b6f6b6349fbe'
                                key: {
                                    name: 'x_2120492_athidhi.manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'cfab380d26b544d4a3298ee4a9dc0083'
                        key: {
                            name: 'x_2120492_athidhi_inventory_reorder'
                            element: 'status'
                            value: 'approved'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'cfb06ba742f64c6c8073c7f1577ed3e6'
                        key: {
                            name: 'x_2120492_athidhi_food_order'
                            element: 'subtotal'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'cfc38b512c51477f9ed70e907131d063'
                        key: {
                            sys_security_acl: 'e387c99b072d4688a6a635b2d8f306d7'
                            sys_user_role: {
                                id: '240a492786cd43859dd397028582ac16'
                                key: {
                                    name: 'x_2120492_athidhi.receptionist'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'cfd577d7a8ee4605b483d22f9cd5110e'
                        key: {
                            name: 'x_2120492_athidhi_guest'
                            element: 'identification_type'
                            value: 'national_id'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'd028b8367bcb4ef4a7a3ebf0f966e43e'
                        key: {
                            sys_security_acl: '3fd23b86394846eda188461010faa27f'
                            sys_user_role: {
                                id: '3e9f6959b3014deca7ed1004952c0462'
                                key: {
                                    name: 'x_2120492_athidhi.maintenance'
                                }
                            }
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'd02a8c531b1f4e439ad4c55ba49f7ff8'
                        key: {
                            name: 'x_2120492_athidhi_menu'
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: 'd02fbdd871af4392887130f2d88874d2'
                        key: {
                            sys_ui_action: 'a18b0f47a93043a2af26fcd7fc9bf742'
                            sys_user_role: {
                                id: 'b45ac46436c14974b223c8bff451f7e8'
                                key: {
                                    name: 'x_2120492_athidhi.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd06b598affcf4954a330b69182d632bb'
                        key: {
                            name: 'x_2120492_athidhi_maintenance_request'
                            element: 'priority'
                            value: 'low'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd06dd51ed29f41ea89820da03d7951f7'
                        key: {
                            name: 'x_2120492_athidhi_menu_item'
                            element: 'category'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd0b1344956954513b24aca4cbc78f616'
                        key: {
                            name: 'x_2120492_athidhi_work_task'
                            element: 'priority'
                            value: 'critical'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd0d4552d4d614fafb9037296de4594cc'
                        key: {
                            name: 'x_2120492_athidhi_menu_item'
                            element: 'dietary_type'
                            value: 'non_vegetarian'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd115fa95c9a14009befa46537a4785cc'
                        key: {
                            name: 'x_2120492_athidhi_service_request'
                            element: 'requested_at'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'd12c032c01a2467e8691101eb1a1c23d'
                        key: {
                            sys_security_acl: '340311a533aa45b093c233d7d41c1bf2'
                            sys_user_role: {
                                id: '7a58b2b3dd1e4586ad7b6fb331fb8788'
                                key: {
                                    name: 'x_2120492_athidhi.guest'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'd160a9a881064fe994febcc733ffea94'
                        key: {
                            sys_security_acl: '0e902bab72f64214b39792b73d9d6c5b'
                            sys_user_role: {
                                id: 'bd9b587c1f9047609d32f4eea97e73bb'
                                key: {
                                    name: 'x_2120492_athidhi.restaurant'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: 'd1d272dc66a748a68e8023a3df7df38a'
                        key: {
                            sys_ui_action: '7a80e24564004431bcecfb96c348e22f'
                            sys_user_role: {
                                id: 'b45ac46436c14974b223c8bff451f7e8'
                                key: {
                                    name: 'x_2120492_athidhi.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd1eb57d82b5e41dcbba733b78632b9bb'
                        key: {
                            name: 'x_2120492_athidhi_reservation'
                            element: 'total_amount'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'd1f3f9f76065490980cf91818e23b9d5'
                        key: {
                            name: 'x_2120492_athidhi_payment'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd277ce0cf01647fa97841bb0bea3d4dc'
                        key: {
                            name: 'x_2120492_athidhi_reservation'
                            element: 'booking_source'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'd2a60088b91e413c8ce725544bb74615'
                        key: {
                            sys_security_acl: 'bed0bf7989584481a9b1467a8f9bcd6b'
                            sys_user_role: {
                                id: 'bd9b587c1f9047609d32f4eea97e73bb'
                                key: {
                                    name: 'x_2120492_athidhi.restaurant'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'd2d53b7176c84b6bbee992a412da8f25'
                        key: {
                            sys_security_acl: 'ce0d69e096c44fada29623828427b611'
                            sys_user_role: {
                                id: '8f68f11dd010432ba80972aa8ac2b77d'
                                key: {
                                    name: 'x_2120492_athidhi.housekeeping'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd2efa921c22f45e8b77630b13fe74b2d'
                        key: {
                            name: 'x_2120492_athidhi_inventory_reorder'
                            element: 'status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'd2fe9257f97c45d7856f8e0affb21718'
                        key: {
                            sys_security_acl: '346e645b5ba241aa8a0e4e347d73580b'
                            sys_user_role: {
                                id: '0e2c8b4a8bd0443fb576b6f6b6349fbe'
                                key: {
                                    name: 'x_2120492_athidhi.manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'd36901d4e1444fe98a143d85f1b2b64d'
                        key: {
                            sys_security_acl: '781623196c144090aa4acb6ad8bad8f3'
                            sys_user_role: {
                                id: 'b45ac46436c14974b223c8bff451f7e8'
                                key: {
                                    name: 'x_2120492_athidhi.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'd369a903a96d47289dbe7064d8a0a6fb'
                        key: {
                            sys_security_acl: 'ea40dd00d8304832acefe3166b87c959'
                            sys_user_role: {
                                id: '0e2c8b4a8bd0443fb576b6f6b6349fbe'
                                key: {
                                    name: 'x_2120492_athidhi.manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'd3a274d96c20474eb06e5f78097d26d1'
                        key: {
                            name: 'x_2120492_athidhi_menu'
                            element: 'menu_type'
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: 'd3af7d86b75448cf951239014fd0228c'
                        key: {
                            sys_ui_action: '920c7b105c26460d8f97c4d294122477'
                            sys_user_role: {
                                id: '0e2c8b4a8bd0443fb576b6f6b6349fbe'
                                key: {
                                    name: 'x_2120492_athidhi.manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_page'
                        id: 'd3bfd69ee839453588edba0260257086'
                        key: {
                            endpoint: 'x_2120492_athidhi_receptionist_workspace.do'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd3d5d29461c04cf69b767796bebc9528'
                        key: {
                            name: 'x_2120492_athidhi_payment'
                            element: 'payment_method'
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: 'd40bd802ec754760b5b3983f49c9c25b'
                        key: {
                            sys_ui_action: '755fb1e0d15b4ef6b4606dcded64be19'
                            sys_user_role: {
                                id: '0e2c8b4a8bd0443fb576b6f6b6349fbe'
                                key: {
                                    name: 'x_2120492_athidhi.manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'd4342d9cc4b245ccaee50296662e69b0'
                        key: {
                            sys_security_acl: '8952653b1f4844f88f004efb214c0a53'
                            sys_user_role: {
                                id: 'b45ac46436c14974b223c8bff451f7e8'
                                key: {
                                    name: 'x_2120492_athidhi.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd45ef9c9d2c941b9bc2a9ddfe76b052f'
                        key: {
                            name: 'x_2120492_athidhi_service_request'
                            element: 'stay'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'd4660e26bc044766a4bb3e736be13ac1'
                        key: {
                            sys_security_acl: '0f5f068cd6f948e3804390ab48126c9a'
                            sys_user_role: {
                                id: '0e2c8b4a8bd0443fb576b6f6b6349fbe'
                                key: {
                                    name: 'x_2120492_athidhi.manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd47fe71be21849b4b9a198db94daaa02'
                        key: {
                            name: 'x_2120492_athidhi_service_request_item'
                            element: 'unit_price'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd48463a9b9b44576a99c4e3dabce5088'
                        key: {
                            name: 'x_2120492_athidhi_inventory_transaction'
                            element: 'transaction_number'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'd493b6cb47d744eaa9c324d77d5708e2'
                        key: {
                            sys_security_acl: 'ecd1a44e7ff1491f87d38c0138670b4e'
                            sys_user_role: {
                                id: 'b45ac46436c14974b223c8bff451f7e8'
                                key: {
                                    name: 'x_2120492_athidhi.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd516ced6141f4d3e8bc61ed460cbd2b6'
                        key: {
                            name: 'x_2120492_athidhi_staff_profile'
                            element: 'notes'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd56c7946fe984fa983677aee3bea1fd1'
                        key: {
                            name: 'x_2120492_athidhi_stay'
                            element: 'status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'd571e4b5006346be92a89c0460b3ad7e'
                        key: {
                            sys_security_acl: 'f6716048cfd444c4b696a8a0853ff663'
                            sys_user_role: {
                                id: 'bd9b587c1f9047609d32f4eea97e73bb'
                                key: {
                                    name: 'x_2120492_athidhi.restaurant'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd5a6333a1d654c3a8a748bae08ce9f43'
                        key: {
                            name: 'x_2120492_athidhi_food_order'
                            element: 'status'
                            value: 'out_for_delivery'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'd630d9045ea548b5b6710e5427a462de'
                        key: {
                            sys_security_acl: '19ce062239c44478913a025bed18236f'
                            sys_user_role: {
                                id: '8f68f11dd010432ba80972aa8ac2b77d'
                                key: {
                                    name: 'x_2120492_athidhi.housekeeping'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd640c7ff0997483d82b63758332283eb'
                        key: {
                            name: 'x_2120492_athidhi_service_request'
                            element: 'description'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'd6cbdffd074946338b151fdf0657f7b6'
                        key: {
                            sys_security_acl: 'ecd1a44e7ff1491f87d38c0138670b4e'
                            sys_user_role: {
                                id: '0e2c8b4a8bd0443fb576b6f6b6349fbe'
                                key: {
                                    name: 'x_2120492_athidhi.manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd6cdf213f6734c96818223aad4c79e92'
                        key: {
                            name: 'x_2120492_athidhi_room_type'
                            element: 'bed_type'
                            value: 'single'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'd6ec701464b44d88b59d8c5f973e1568'
                        key: {
                            sys_security_acl: '9b0e2c64920e4a9999336b1f814b982f'
                            sys_user_role: {
                                id: 'bd9b587c1f9047609d32f4eea97e73bb'
                                key: {
                                    name: 'x_2120492_athidhi.restaurant'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'd73d59213fa146c2b4986a3cce206804'
                        key: {
                            name: 'x_2120492_athidhi_menu_item'
                            element: 'dietary_type'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'd74d241563554978bd77df6ccc45905f'
                        key: {
                            sys_security_acl: '802f0d4f43ce4d7cb1fba608c98ab3e8'
                            sys_user_role: {
                                id: '0e2c8b4a8bd0443fb576b6f6b6349fbe'
                                key: {
                                    name: 'x_2120492_athidhi.manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'd7b1a5cb8df045c9a83b85e18c2ab46e'
                        key: {
                            name: 'x_2120492_athidhi_inventory_reorder'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd7ca30468e01454f88c8a131e106957b'
                        key: {
                            name: 'x_2120492_athidhi_service_request_item'
                            element: 'catalog_item'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd7ddf5b6cc614bec8a439a132b750cab'
                        key: {
                            name: 'x_2120492_athidhi_service_request'
                            element: 'request_number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd7f740afce2f48ab94b277606320df0c'
                        key: {
                            name: 'x_2120492_athidhi_inventory_reorder'
                            element: 'status'
                            value: 'draft'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd88c5d374b4343ebbfea8ca4579fa410'
                        key: {
                            name: 'x_2120492_athidhi_room'
                            element: 'active'
                        }
                    },
                    {
                        table: 'sys_number'
                        id: 'd8a405cb54824a1a95fd1004997f0b8d'
                        key: {
                            category: 'x_2120492_athidhi_service_request'
                            prefix: 'SRV'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd8c13ea91622435a8d669ca9ee99b9d9'
                        key: {
                            name: 'x_2120492_athidhi_payment'
                            element: 'status'
                            value: 'refunded'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'd8dbd080970a47b3b5ef9ce3ced8050f'
                        key: {
                            name: 'x_2120492_athidhi_incident'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd906e79469944a4e8f801697e31be3b6'
                        key: {
                            name: 'x_2120492_athidhi_incident'
                            element: 'resolved_at'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'd92c9075adad41e4b1c956bc51fd664f'
                        key: {
                            sys_security_acl: '625bfd1547b44ba6a011585fc8cc2d5a'
                            sys_user_role: {
                                id: '0e2c8b4a8bd0443fb576b6f6b6349fbe'
                                key: {
                                    name: 'x_2120492_athidhi.manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'd944b4e6903449f7bde71a05a3a3e1b9'
                        key: {
                            name: 'x_2120492_athidhi_department'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd95bbdf00d424997816b34a77009b656'
                        key: {
                            name: 'x_2120492_athidhi_menu'
                            element: 'menu_type'
                            value: 'room_service'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'd96b01d10e1a4c8dbe40caba51df9683'
                        key: {
                            sys_security_acl: '29522196288346fa8daed8d46faddaa6'
                            sys_user_role: {
                                id: 'bd9b587c1f9047609d32f4eea97e73bb'
                                key: {
                                    name: 'x_2120492_athidhi.restaurant'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'd9c4072188734395940433074ea9a829'
                        key: {
                            sys_security_acl: '3b52f6fa4021465ca9c09b905006c22b'
                            sys_user_role: {
                                id: 'bd9b587c1f9047609d32f4eea97e73bb'
                                key: {
                                    name: 'x_2120492_athidhi.restaurant'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'da20280b8ca64e379c244e666b90cacd'
                        key: {
                            name: 'x_2120492_athidhi_inventory_item'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'da2ac0c4f7df4136be1b278fd86369a5'
                        key: {
                            name: 'x_2120492_athidhi_inventory_reorder'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'dacb70836212400abe9b223b49a60551'
                        key: {
                            sys_security_acl: '19ce062239c44478913a025bed18236f'
                            sys_user_role: {
                                id: 'b45ac46436c14974b223c8bff451f7e8'
                                key: {
                                    name: 'x_2120492_athidhi.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'daf25e4594be4f12a1adb9737c786c71'
                        key: {
                            sys_security_acl: '4edb313bed594c37961589cc3f349010'
                            sys_user_role: {
                                id: '240a492786cd43859dd397028582ac16'
                                key: {
                                    name: 'x_2120492_athidhi.receptionist'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'db2564ec63824e6d96b0689b95c5f93e'
                        key: {
                            name: 'x_2120492_athidhi_ai_interaction_log'
                            element: 'action_result'
                            value: 'RATE_LIMITED'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'db51a62efef94f06b1d49efeda44a666'
                        key: {
                            name: 'x_2120492_athidhi_guest'
                            element: 'date_of_birth'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'db94f5c148874d37a16fa344fea1a32b'
                        key: {
                            name: 'x_2120492_athidhi_staff_profile'
                            element: 'employee_number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'dba0bf359dfc4d129af5d8060c62118f'
                        key: {
                            sys_security_acl: '081ae3f296fa4f3d98ec0ae57e1f1f90'
                            sys_user_role: {
                                id: 'b45ac46436c14974b223c8bff451f7e8'
                                key: {
                                    name: 'x_2120492_athidhi.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'dba37e9d6ec946c19eabf4c5481c6421'
                        key: {
                            name: 'x_2120492_athidhi_staff_profile'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: 'dba82ac38a294e118ee06d014105132f'
                        key: {
                            role: {
                                id: '0e2c8b4a8bd0443fb576b6f6b6349fbe'
                                key: {
                                    name: 'x_2120492_athidhi.manager'
                                }
                            }
                            contains: {
                                id: '8f68f11dd010432ba80972aa8ac2b77d'
                                key: {
                                    name: 'x_2120492_athidhi.housekeeping'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'dbc7ed7732044471bb5eb2ed249b2bf0'
                        key: {
                            sys_security_acl: 'cf69463db4bf4380924bd2c0fddc447b'
                            sys_user_role: {
                                id: '0e2c8b4a8bd0443fb576b6f6b6349fbe'
                                key: {
                                    name: 'x_2120492_athidhi.manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'dc45dfd90cbd4cc8afbd62836c27c9e0'
                        key: {
                            name: 'x_2120492_athidhi_menu_item'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'dc5ee278e42a437cade7aa170a0c59fb'
                        key: {
                            name: 'x_2120492_athidhi_maintenance_request'
                            element: 'service_request'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'dc6ddd4e9b0d451192c2ae2b2d6b970e'
                        key: {
                            name: 'x_2120492_athidhi_incident'
                            element: 'service_request'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'dca0cabcb32846c29a965b7c14752b4d'
                        key: {
                            name: 'x_2120492_athidhi_room'
                            element: 'housekeeping_status'
                            value: 'clean'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'dca55fd2b6564c959f5d40d931abc388'
                        key: {
                            name: 'x_2120492_athidhi_restaurant'
                            element: 'description'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'dd810818d3d8429089e5682320cb2f55'
                        key: {
                            name: 'x_2120492_athidhi_department'
                            element: 'name'
                            value: 'housekeeping'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'dd8ea3b122494ebea9eea90956b264b7'
                        key: {
                            name: 'x_2120492_athidhi_inventory_reorder'
                            element: 'requested_at'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'ddc7771a5d814a7c99300ec1e183b599'
                        key: {
                            name: 'x_2120492_athidhi_ai_interaction_log'
                            element: 'action_result'
                            value: 'UNAUTHORIZED'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'dddd42dfeca74e3393ced884fa7dfcc0'
                        key: {
                            name: 'x_2120492_athidhi_inventory_item'
                            element: 'category'
                            value: 'beverage'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'dddd6bed2bc44645a34b150d1c2c1acb'
                        key: {
                            name: 'x_2120492_athidhi_food_order'
                            element: 'priority'
                            value: 'urgent'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'dde5457bcd084733a9b7c2f80b8c2e5f'
                        key: {
                            name: 'x_2120492_athidhi_service_request_item'
                            element: 'total_price'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'ddffa57ecda646e6b99e8758d1648c05'
                        key: {
                            sys_security_acl: '3c36adabd1ff4ef282011aee65e4e931'
                            sys_user_role: {
                                id: '240a492786cd43859dd397028582ac16'
                                key: {
                                    name: 'x_2120492_athidhi.receptionist'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'de8370c7fd034e5382e44772545f1052'
                        key: {
                            name: 'x_2120492_athidhi_room'
                            element: 'status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'de95a02b215048be8180529e3ca41fec'
                        key: {
                            sys_security_acl: 'f502dd7404af4e419ca7b5e8e77d0ca4'
                            sys_user_role: {
                                id: '7a58b2b3dd1e4586ad7b6fb331fb8788'
                                key: {
                                    name: 'x_2120492_athidhi.guest'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'deda86e2e913462fa89533eddfd4b37e'
                        key: {
                            name: 'x_2120492_athidhi_housekeeping_task'
                            element: 'stay'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: 'dedd3cfd33a64db9ba8a2a413bf4eb91'
                        key: {
                            sys_ui_action: '1d2f24ed96fc49f181f74e1365382666'
                            sys_user_role: {
                                id: '3e9f6959b3014deca7ed1004952c0462'
                                key: {
                                    name: 'x_2120492_athidhi.maintenance'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'df3bd68af8a3419cb1fd478a4d868a34'
                        key: {
                            sys_security_acl: 'f6716048cfd444c4b696a8a0853ff663'
                            sys_user_role: {
                                id: 'b45ac46436c14974b223c8bff451f7e8'
                                key: {
                                    name: 'x_2120492_athidhi.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'df9858a32e47405bb7292536b1aaa5e9'
                        key: {
                            sys_security_acl: '3ecb327fa8f448beb7f09e55832943a0'
                            sys_user_role: {
                                id: '240a492786cd43859dd397028582ac16'
                                key: {
                                    name: 'x_2120492_athidhi.receptionist'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'dfa608ee7b4544f3b0a44d4b6f0ef4c0'
                        key: {
                            sys_security_acl: 'bed0bf7989584481a9b1467a8f9bcd6b'
                            sys_user_role: {
                                id: '0e2c8b4a8bd0443fb576b6f6b6349fbe'
                                key: {
                                    name: 'x_2120492_athidhi.manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'dfc11ed30dd84a959cd7293c1432d955'
                        key: {
                            name: 'x_2120492_athidhi_department'
                            element: 'description'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'dfc2420d468a472ca6d5abfae6bef684'
                        key: {
                            sys_security_acl: 'dd3e084692d5467e87d2262f0ac676d8'
                            sys_user_role: {
                                id: 'b45ac46436c14974b223c8bff451f7e8'
                                key: {
                                    name: 'x_2120492_athidhi.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'dfcb4971fcc941e3875afd9b2a498f31'
                        key: {
                            sys_security_acl: 'e5f0e99503b341e8b74889135ffe4414'
                            sys_user_role: {
                                id: '7a58b2b3dd1e4586ad7b6fb331fb8788'
                                key: {
                                    name: 'x_2120492_athidhi.guest'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'e011e89785344e4e8d436bb988ed4d1c'
                        key: {
                            name: 'x_2120492_athidhi_amenity'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e0492830e1dd4f7dad67c49157852c69'
                        key: {
                            name: 'x_2120492_athidhi_food_order_item'
                            element: 'total_price'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'e085acd49673481cb3cc649e418fcfc5'
                        key: {
                            sys_security_acl: '0e902bab72f64214b39792b73d9d6c5b'
                            sys_user_role: {
                                id: '8f68f11dd010432ba80972aa8ac2b77d'
                                key: {
                                    name: 'x_2120492_athidhi.housekeeping'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'e0c7fca1984842a9a0682c9294a72b77'
                        key: {
                            sys_security_acl: 'b0c9007301db4316b8270951076ba88f'
                            sys_user_role: {
                                id: '0e2c8b4a8bd0443fb576b6f6b6349fbe'
                                key: {
                                    name: 'x_2120492_athidhi.manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e0cd2bcdfe4443ec8299786c006cc461'
                        key: {
                            name: 'x_2120492_athidhi_work_task'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e0e0ce5f162f4e49bb2114508f6c3cb0'
                        key: {
                            name: 'x_2120492_athidhi_inventory_item'
                            element: 'unit'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e10881b085604d80887c9dec4bf30214'
                        key: {
                            name: 'x_2120492_athidhi_food_order'
                            element: 'requested_delivery_time'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e14791e7237340a3a0bbe6dc677b0619'
                        key: {
                            name: 'x_2120492_athidhi_amenity'
                            element: 'description'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e14decdf28084c2dae519ea930325b2a'
                        key: {
                            name: 'x_2120492_athidhi_payment'
                            element: 'payment_method'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'e154b9ad8d5a4c06a52f958bd2bbd8f1'
                        key: {
                            name: 'x_2120492_athidhi_stay'
                            element: 'status'
                            value: 'cancelled'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'e161599e8c4748bf9f584aeea7db6057'
                        key: {
                            name: 'x_2120492_athidhi_reservation'
                            element: 'payment_status'
                            value: 'paid'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e1b127d25dce42e8bf938bbacb31987d'
                        key: {
                            name: 'x_2120492_athidhi_menu_item'
                            element: 'name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e1c66a7226674af693721f795f04bcba'
                        key: {
                            name: 'x_2120492_athidhi_service_request'
                            element: 'department'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e1f37d102d204bf0ab2304964e37f5c1'
                        key: {
                            name: 'x_2120492_athidhi_food_order'
                            element: 'priority'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'e204ad82b83d42f6a532e5bc4389c82a'
                        key: {
                            sys_security_acl: '0eb4b258ad5d486f8d9b3fb369a15762'
                            sys_user_role: {
                                id: 'b45ac46436c14974b223c8bff451f7e8'
                                key: {
                                    name: 'x_2120492_athidhi.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e2073904ad4341e9bd61fee76543a850'
                        key: {
                            name: 'x_2120492_athidhi_payment'
                            element: 'transaction_reference'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'e22818bd4b9b46c9aceb6ede11c91842'
                        key: {
                            sys_security_acl: 'a6d4e9871646453c9ce294d090e723df'
                            sys_user_role: {
                                id: '0e2c8b4a8bd0443fb576b6f6b6349fbe'
                                key: {
                                    name: 'x_2120492_athidhi.manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e24bb8d73d6e4fd49466a9043620d429'
                        key: {
                            name: 'x_2120492_athidhi_staff_profile'
                            element: 'department'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'e271d1e3fb304859a5bf466775815584'
                        key: {
                            sys_security_acl: '65a51030a5ec417b8945d7ff46e34580'
                            sys_user_role: {
                                id: '0e2c8b4a8bd0443fb576b6f6b6349fbe'
                                key: {
                                    name: 'x_2120492_athidhi.manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'e2b5a026178348de916f1895a83206eb'
                        key: {
                            name: 'x_2120492_athidhi_housekeeping_task'
                            element: 'priority'
                            value: 'high'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e2ccff5837454717ae3ca572345937a9'
                        key: {
                            name: 'x_2120492_athidhi_maintenance_request'
                            element: 'request_number'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'e303d6fa16594e5db5873110c5103172'
                        key: {
                            name: 'x_2120492_athidhi_reservation'
                            element: 'status'
                            value: 'checked_in'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e33e4da308204a029125bb796f4f8437'
                        key: {
                            name: 'x_2120492_athidhi_menu'
                            element: 'menu_number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'e35b257637c04a0fa977de9882f894fb'
                        key: {
                            name: 'x_2120492_athidhi_service_request'
                            element: 'priority'
                            value: 'medium'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'e380dd542c094af280c529840e9e0efb'
                        key: {
                            sys_security_acl: '6be7359e260c4e57b10838b980bed11a'
                            sys_user_role: {
                                id: '0e2c8b4a8bd0443fb576b6f6b6349fbe'
                                key: {
                                    name: 'x_2120492_athidhi.manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'e40f39e9999a43d496d8c5eac2a3532e'
                        key: {
                            name: 'x_2120492_athidhi_room'
                            element: 'status'
                            value: 'cleaning'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e444a6c4c1534be3a52f425da7b63f95'
                        key: {
                            name: 'x_2120492_athidhi_restaurant'
                            element: 'restaurant_number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e466a4e933874027845e728f3317d10f'
                        key: {
                            name: 'x_2120492_athidhi_maintenance_request'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e470dfc8b5634b77b8ee4e6f4be3fc84'
                        key: {
                            name: 'x_2120492_athidhi_stay'
                            element: 'stay_number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'e4eaf0902cca4034b0dc2fa43dc809a4'
                        key: {
                            sys_security_acl: '89362f28780b4cb7aaafd8f339af6ab3'
                            sys_user_role: {
                                id: '0e2c8b4a8bd0443fb576b6f6b6349fbe'
                                key: {
                                    name: 'x_2120492_athidhi.manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'e529e0415422442fb6268a60a1c98159'
                        key: {
                            name: 'x_2120492_athidhi_guest'
                            element: 'loyalty_tier'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e5516fb61b314ec3b1e8f31a11f7da67'
                        key: {
                            name: 'x_2120492_athidhi_maintenance_request'
                            element: 'room'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e55f134e565344ec8e40ac608eb66129'
                        key: {
                            name: 'x_2120492_athidhi_guest'
                            element: 'nationality'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e565be4c35d0475fa1a9b1a93e6728d4'
                        key: {
                            name: 'x_2120492_athidhi_ai_interaction_log'
                            element: 'logged_at'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'e58372d09ba44955967f04f5c352b97e'
                        key: {
                            sys_security_acl: '960d66e268344875be8074167c2cbc77'
                            sys_user_role: {
                                id: '0e2c8b4a8bd0443fb576b6f6b6349fbe'
                                key: {
                                    name: 'x_2120492_athidhi.manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'e5be4cdc353f41859242ec43cc0fae24'
                        key: {
                            sys_security_acl: '1e8acc49ba7f4400b07b9883cc5636ca'
                            sys_user_role: {
                                id: 'b45ac46436c14974b223c8bff451f7e8'
                                key: {
                                    name: 'x_2120492_athidhi.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e5d9cbe2c10640c2a1600a349d15dff8'
                        key: {
                            name: 'x_2120492_athidhi_amenity'
                            element: 'active'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e5e8781e2a894267860a204bd072b9da'
                        key: {
                            name: 'x_2120492_athidhi_ai_interaction_log'
                            element: 'summary'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e6205746a1ca4e97a2ae66b2bf0b7a83'
                        key: {
                            name: 'x_2120492_athidhi_reservation'
                            element: 'booking_source'
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: 'e6396a9c15fd497baf39d617eb6b71c4'
                        key: {
                            sys_ui_action: '3200c3186dbd4bf2b7957f2431398b84'
                            sys_user_role: {
                                id: 'b45ac46436c14974b223c8bff451f7e8'
                                key: {
                                    name: 'x_2120492_athidhi.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e63e2e7f923d4d3e97f427a2cf4cfc99'
                        key: {
                            name: 'x_2120492_athidhi_room'
                            element: 'room_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e7279641f08a49fdb363f221b54079da'
                        key: {
                            name: 'x_2120492_athidhi_reservation'
                            element: 'room'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e7394a4391554497b3b17fad120dbaae'
                        key: {
                            name: 'x_2120492_athidhi_guest'
                            element: 'address'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'e739a7156b394542ac671d16abc8b10f'
                        key: {
                            sys_security_acl: '78b24b1238da4b4c8c6a11617bb92b14'
                            sys_user_role: {
                                id: 'b45ac46436c14974b223c8bff451f7e8'
                                key: {
                                    name: 'x_2120492_athidhi.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'e75d288a32994bb398532d9157243506'
                        key: {
                            name: 'x_2120492_athidhi_payment'
                            element: 'payment_method'
                            value: 'bank_transfer'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'e78741b55ec3417e8e3968a0a61b29a1'
                        key: {
                            sys_security_acl: '3cceb82569b44319ab71423345b72806'
                            sys_user_role: {
                                id: 'b45ac46436c14974b223c8bff451f7e8'
                                key: {
                                    name: 'x_2120492_athidhi.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'e7e67494d92740f8bb76800481e56127'
                        key: {
                            sys_security_acl: '5351073f028c4bcaa249b928c271cc0a'
                            sys_user_role: {
                                id: 'b45ac46436c14974b223c8bff451f7e8'
                                key: {
                                    name: 'x_2120492_athidhi.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e84ad2aec6fc49eaab1fd8742e759a59'
                        key: {
                            name: 'x_2120492_athidhi_housekeeping_task'
                            element: 'scheduled_start'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e8b8897159b54173aee35b5f29ea0964'
                        key: {
                            name: 'x_2120492_athidhi_department'
                            element: 'manager'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'e8d72cadf19d424a9ce2fe4d45c6fbf5'
                        key: {
                            sys_security_acl: '98e0dfa8781a459f95882265bf684ec4'
                            sys_user_role: {
                                id: '0e2c8b4a8bd0443fb576b6f6b6349fbe'
                                key: {
                                    name: 'x_2120492_athidhi.manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_number'
                        id: 'e90b962d9e2847d58ac2f0c87c7f503d'
                        key: {
                            category: 'x_2120492_athidhi_guest'
                            prefix: 'GST'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'e9933accb6ed405ca0c8abf5d301141f'
                        key: {
                            sys_security_acl: '787aa58f789a412ca81e624277ad99f3'
                            sys_user_role: {
                                id: 'b45ac46436c14974b223c8bff451f7e8'
                                key: {
                                    name: 'x_2120492_athidhi.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'e9bc355a9e3441458550eccaddadf3d5'
                        key: {
                            name: 'x_2120492_athidhi_service_request'
                            element: 'request_type'
                            value: 'room_service'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'ea93c7c8912e4e39b00cd7f3ebcbbb3f'
                        key: {
                            sys_security_acl: '346e645b5ba241aa8a0e4e347d73580b'
                            sys_user_role: {
                                id: 'b45ac46436c14974b223c8bff451f7e8'
                                key: {
                                    name: 'x_2120492_athidhi.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'eaa04acf67254dc9a2630dd889be1574'
                        key: {
                            name: 'x_2120492_athidhi_service_request_item'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'eacd3215ac4d404c849a0c05e4020f65'
                        key: {
                            name: 'x_2120492_athidhi_amenity'
                            element: 'name'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'eaff497a09d142b4a30911db37054a5e'
                        key: {
                            sys_security_acl: '04945a2703e047a3af6eb32947439c76'
                            sys_user_role: {
                                id: 'b45ac46436c14974b223c8bff451f7e8'
                                key: {
                                    name: 'x_2120492_athidhi.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'eb665b41a4a04addb2d0366b1e9127f6'
                        key: {
                            sys_security_acl: 'da44235fbac4497884218531468b496e'
                            sys_user_role: {
                                id: 'b45ac46436c14974b223c8bff451f7e8'
                                key: {
                                    name: 'x_2120492_athidhi.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ebb8c1ebe90940db8635720004e6bcbc'
                        key: {
                            name: 'x_2120492_athidhi_menu_item'
                            element: 'menu'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'ec1caa72207849afa97d21efb793268f'
                        key: {
                            name: 'x_2120492_athidhi_service_request'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'ec1f6a72ce154c5fa8856dee614233c3'
                        key: {
                            name: 'x_2120492_athidhi_housekeeping_task'
                            element: 'task_type'
                            value: 'check_out_cleaning'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ec2384d23a4241dc84c9eb0b2631d616'
                        key: {
                            name: 'x_2120492_athidhi_housekeeping_task'
                            element: 'inspection_status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ec26e88a815f47e38ab83d031b275585'
                        key: {
                            name: 'x_2120492_athidhi_service_request_item'
                            element: 'request'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'ec372181fd334220b6747d252d98bf1e'
                        key: {
                            sys_security_acl: 'b58ecb147c364ccbbab54329ab0eb127'
                            sys_user_role: {
                                id: '3e9f6959b3014deca7ed1004952c0462'
                                key: {
                                    name: 'x_2120492_athidhi.maintenance'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ec447178772b4ed0b7d271f3d20df762'
                        key: {
                            name: 'x_2120492_athidhi_food_order'
                            element: 'special_instructions'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ec8dc0cf6b9d4691af447e0e4ee8e146'
                        key: {
                            name: 'x_2120492_athidhi_inventory_item'
                            element: 'minimum_quantity'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ed21059df9d14eb49980717700830355'
                        key: {
                            name: 'x_2120492_athidhi_service_request'
                            element: 'catalog_item'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'ed2d9f010620490f9d40e531b2d30813'
                        key: {
                            name: 'x_2120492_athidhi_room'
                            element: 'status'
                            value: 'available'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ed2e358b91ff40eda0e7387c96551dba'
                        key: {
                            name: 'x_2120492_athidhi_guest_preference'
                            element: 'notes'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ed4c6f4d1b604cf6a89be3a5edcf817b'
                        key: {
                            name: 'x_2120492_athidhi_food_order'
                            element: 'restaurant'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'ee0282b7708e41cbb96570619df1241a'
                        key: {
                            name: 'x_2120492_athidhi_housekeeping_task'
                            element: 'status'
                            value: 'assigned'
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: 'ee083f063ea7465ca40cbafec28db14f'
                        key: {
                            sys_ui_action: '33b5c60faf4d481686046d1f8f2e771a'
                            sys_user_role: {
                                id: 'b45ac46436c14974b223c8bff451f7e8'
                                key: {
                                    name: 'x_2120492_athidhi.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'ee422acd1e1a46c5aaf617384a024fb7'
                        key: {
                            name: 'x_2120492_athidhi_housekeeping_task'
                            element: 'inspection_status'
                            value: 'passed'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'ee4bf4602c9742d1b453de50f148343e'
                        key: {
                            sys_security_acl: '5351073f028c4bcaa249b928c271cc0a'
                            sys_user_role: {
                                id: 'bd9b587c1f9047609d32f4eea97e73bb'
                                key: {
                                    name: 'x_2120492_athidhi.restaurant'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'ee809af32e824493b23a3cc98bd2085e'
                        key: {
                            sys_security_acl: 'f0754fa3eac445e2b0f0a84e7bdebef3'
                            sys_user_role: {
                                id: '0e2c8b4a8bd0443fb576b6f6b6349fbe'
                                key: {
                                    name: 'x_2120492_athidhi.manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'eeda5936424c49d38fff2e1ef038541b'
                        key: {
                            name: 'x_2120492_athidhi_guest_preference'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'eefbde5a6e394cfd8429d4a2cc357392'
                        key: {
                            sys_security_acl: 'cf69463db4bf4380924bd2c0fddc447b'
                            sys_user_role: {
                                id: 'b45ac46436c14974b223c8bff451f7e8'
                                key: {
                                    name: 'x_2120492_athidhi.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'ef62bff66fbc4fc694dddab426bb0c0a'
                        key: {
                            sys_security_acl: '143a3d7d831b4b85b200d24da6f31cb5'
                            sys_user_role: {
                                id: '0e2c8b4a8bd0443fb576b6f6b6349fbe'
                                key: {
                                    name: 'x_2120492_athidhi.manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'ef74a2855a174b5bb96be0dc6f149559'
                        key: {
                            sys_security_acl: '960d66e268344875be8074167c2cbc77'
                            sys_user_role: {
                                id: 'b45ac46436c14974b223c8bff451f7e8'
                                key: {
                                    name: 'x_2120492_athidhi.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'efafa0838ade4f4f8934eb69077ad2d7'
                        key: {
                            sys_security_acl: 'a18a740d339b446f996a584ea7ce3e38'
                            sys_user_role: {
                                id: 'b45ac46436c14974b223c8bff451f7e8'
                                key: {
                                    name: 'x_2120492_athidhi.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'efcbf3a0b3ce4c969638db142e8f91fd'
                        key: {
                            sys_security_acl: 'f0754fa3eac445e2b0f0a84e7bdebef3'
                            sys_user_role: {
                                id: 'b45ac46436c14974b223c8bff451f7e8'
                                key: {
                                    name: 'x_2120492_athidhi.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f01bcea5f91d481ab479f7e523dcefb2'
                        key: {
                            name: 'x_2120492_athidhi_room_type'
                            element: 'base_price'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: 'f035a07b343e4a7aa4e20c8ad5860d2f'
                        key: {
                            sys_ui_action: '8260643261ba45c8a0a645a06b7b2400'
                            sys_user_role: {
                                id: '0e2c8b4a8bd0443fb576b6f6b6349fbe'
                                key: {
                                    name: 'x_2120492_athidhi.manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'f062febe3a9442dc995c9df5cda05965'
                        key: {
                            sys_security_acl: '89302a9c479b4cfdbf5ef4ccb17ff38e'
                            sys_user_role: {
                                id: '0e2c8b4a8bd0443fb576b6f6b6349fbe'
                                key: {
                                    name: 'x_2120492_athidhi.manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f083cfe3f91841d7a3fb97a86a99ff6c'
                        key: {
                            name: 'x_2120492_athidhi_maintenance_request'
                            element: 'request_number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f0934f844fef4d2d84181f6ca484c844'
                        key: {
                            name: 'x_2120492_athidhi_incident'
                            element: 'category'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f0d4f510fe954bea991bc394472ba6f2'
                        key: {
                            name: 'x_2120492_athidhi_room_type'
                            element: 'active'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f0ddd9d5d9034b0ebf2be5a42e138c21'
                        key: {
                            name: 'x_2120492_athidhi_incident'
                            element: 'incident_number'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'f13f204d6ac742e1ad456bd334a995c7'
                        key: {
                            name: 'x_2120492_athidhi_maintenance_request'
                            element: 'priority'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'f15008bf51d14920a2c4e92d90ba3eca'
                        key: {
                            sys_security_acl: 'f4c728038dfb46368c1bf4ccc26772ae'
                            sys_user_role: {
                                id: '0e2c8b4a8bd0443fb576b6f6b6349fbe'
                                key: {
                                    name: 'x_2120492_athidhi.manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'f1830b88c0c54ffe820a5f9c8cf41277'
                        key: {
                            sys_security_acl: '3c36adabd1ff4ef282011aee65e4e931'
                            sys_user_role: {
                                id: '7a58b2b3dd1e4586ad7b6fb331fb8788'
                                key: {
                                    name: 'x_2120492_athidhi.guest'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'f18a3ab18aac4f10a92717c02b5a24f2'
                        key: {
                            sys_security_acl: '346e645b5ba241aa8a0e4e347d73580b'
                            sys_user_role: {
                                id: '8f68f11dd010432ba80972aa8ac2b77d'
                                key: {
                                    name: 'x_2120492_athidhi.housekeeping'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'f1ce2b4e6445401f9b2467a53d508b57'
                        key: {
                            name: 'x_2120492_athidhi_service_request'
                            element: 'priority'
                            value: 'low'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f1e3c26976d341ebbc846ba7b1137c6c'
                        key: {
                            name: 'x_2120492_athidhi_housekeeping_task'
                            element: 'assigned_to'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'f274eb32a72c4d3e8c05d5149ab27d48'
                        key: {
                            sys_security_acl: 'de8322dfd365426d81aa0ce1e23a53a9'
                            sys_user_role: {
                                id: '0e2c8b4a8bd0443fb576b6f6b6349fbe'
                                key: {
                                    name: 'x_2120492_athidhi.manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_number'
                        id: 'f27b0df041cf4675abb5a270416e5469'
                        key: {
                            category: 'x_2120492_athidhi_ai_interaction_log'
                            prefix: 'AIL'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'f27e2f4147194d1da862aaab772d3e55'
                        key: {
                            sys_security_acl: 'df4a5c6bc84641ec9e0f122dcbb9a52a'
                            sys_user_role: {
                                id: '0e2c8b4a8bd0443fb576b6f6b6349fbe'
                                key: {
                                    name: 'x_2120492_athidhi.manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f29b0427269e4fcd9c64062ba4a611e2'
                        key: {
                            name: 'x_2120492_athidhi_reservation'
                            element: 'check_out'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f2c36c19aa284ffba9c7075f27a57d6c'
                        key: {
                            name: 'x_2120492_athidhi_work_task'
                            element: 'task_number'
                        }
                    },
                    {
                        table: 'sys_rest_message_fn'
                        id: 'f32980213ec746ceadb1313273b6bfa3'
                        key: {
                            rest_message: '4e4dd79eb73d4bffacd55cd2ab7dbee1'
                            function_name: 'generateContent'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'f3936c7a8e6a43de9798e646d8cc5b10'
                        key: {
                            sys_security_acl: '3b63f635228c4259b7ac86f1faf39bfe'
                            sys_user_role: {
                                id: '0e2c8b4a8bd0443fb576b6f6b6349fbe'
                                key: {
                                    name: 'x_2120492_athidhi.manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'f3bb880cd3e14cfa988da87efe70a96d'
                        key: {
                            sys_security_acl: '33770d0ccb03489596b92bfca053d8df'
                            sys_user_role: {
                                id: 'b45ac46436c14974b223c8bff451f7e8'
                                key: {
                                    name: 'x_2120492_athidhi.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'f3f3baf73f594e6792c0b49bc3e993d7'
                        key: {
                            name: 'x_2120492_athidhi_guest'
                            element: 'identification_type'
                            value: 'passport'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f47351f890e24c3b8de1927bb8f086d6'
                        key: {
                            name: 'x_2120492_athidhi_service_request'
                            element: 'assigned_group'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'f477ef33cdb44d8d87de7c4c013311db'
                        key: {
                            name: 'x_2120492_athidhi_menu_item'
                            element: 'category'
                            value: 'starter'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f487b3bce18e443298465e12998f3edf'
                        key: {
                            name: 'x_2120492_athidhi_inventory_transaction'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f4a699b1ad3c4f5fbf967489aa5f9488'
                        key: {
                            name: 'x_2120492_athidhi_food_order'
                            element: 'order_number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'f4c0b85e4da44ebda4f9bedbb38a96f0'
                        key: {
                            name: 'x_2120492_athidhi_stay'
                            element: 'status'
                            value: 'checked_out'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'f55a8a1ee3284ee189629c687fd04fce'
                        key: {
                            name: 'x_2120492_athidhi_room'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_number'
                        id: 'f5ce1a4ac46f42599f35167b3ec32be8'
                        key: {
                            category: 'x_2120492_athidhi_menu_item'
                            prefix: 'ITM'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'f60a5ad29f2c4b20b23941ead3fe1921'
                        key: {
                            name: 'x_2120492_athidhi_inventory_transaction'
                            element: 'transaction_type'
                            value: 'transfer'
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: 'f635ca7dbd8b4f9894ac9d253604374d'
                        key: {
                            sys_ui_action: '07448868eba9489cac5ded657bc79265'
                            sys_user_role: {
                                id: '240a492786cd43859dd397028582ac16'
                                key: {
                                    name: 'x_2120492_athidhi.receptionist'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'f646c96acb714d979022736313a1ed28'
                        key: {
                            name: 'x_2120492_athidhi_stay'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'f6c9de438f1d4cfd92e58f41071d64f3'
                        key: {
                            name: 'x_2120492_athidhi_guest'
                            element: 'loyalty_tier'
                            value: 'platinum'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f6cafaa14d1041c6ae6479cdbbce4ecb'
                        key: {
                            name: 'x_2120492_athidhi_service_request'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'f6f4af7bb4bd4a6fa60d35125266d813'
                        key: {
                            name: 'x_2120492_athidhi_incident'
                            element: 'priority'
                            value: 'medium'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'f70f8658879045058634cdd99e75a7be'
                        key: {
                            sys_security_acl: '781623196c144090aa4acb6ad8bad8f3'
                            sys_user_role: {
                                id: '0e2c8b4a8bd0443fb576b6f6b6349fbe'
                                key: {
                                    name: 'x_2120492_athidhi.manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'f7455274d5134ba3bee31ac423565e25'
                        key: {
                            name: 'x_2120492_athidhi_amenity'
                            element: 'category'
                            value: 'room'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'f7f0f57e64184992a543affb480216b3'
                        key: {
                            sys_security_acl: '50e65ae74321493499f4cbed47ad13b5'
                            sys_user_role: {
                                id: '0e2c8b4a8bd0443fb576b6f6b6349fbe'
                                key: {
                                    name: 'x_2120492_athidhi.manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'f814fa1cd6f643838e847b5b3ffd34aa'
                        key: {
                            name: 'x_2120492_athidhi_maintenance_request'
                            element: 'priority'
                            value: 'medium'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'f8588b3922f148768ae0bf88327c9ee1'
                        key: {
                            name: 'x_2120492_athidhi_work_task'
                            element: 'task_type'
                            value: 'maintenance'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'f878871187ab4fb3885e4d3823be4453'
                        key: {
                            sys_security_acl: 'f0754fa3eac445e2b0f0a84e7bdebef3'
                            sys_user_role: {
                                id: '240a492786cd43859dd397028582ac16'
                                key: {
                                    name: 'x_2120492_athidhi.receptionist'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: 'f885df0cc5c14235ad326a0123c8cfd7'
                        key: {
                            sys_ui_action: '2e93ed3246734acf93813f2427a9b462'
                            sys_user_role: {
                                id: 'b45ac46436c14974b223c8bff451f7e8'
                                key: {
                                    name: 'x_2120492_athidhi.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'f8fa3fd618de48239e46f11119431a7d'
                        key: {
                            name: 'x_2120492_athidhi_service_request'
                            element: 'priority'
                            value: 'critical'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'f95946c6568d40539c404f619d3e2699'
                        key: {
                            sys_security_acl: '0e902bab72f64214b39792b73d9d6c5b'
                            sys_user_role: {
                                id: '3e9f6959b3014deca7ed1004952c0462'
                                key: {
                                    name: 'x_2120492_athidhi.maintenance'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f9922398a27f430995ff5c8c99aae9a2'
                        key: {
                            name: 'x_2120492_athidhi_inventory_reorder'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'f998ce609eef4591bb64266e65da714f'
                        key: {
                            name: 'x_2120492_athidhi_housekeeping_task'
                            element: 'priority'
                            value: 'critical'
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: 'f9b509c6c5124097a333f75d1aa8b4fe'
                        key: {
                            sys_ui_action: '07448868eba9489cac5ded657bc79265'
                            sys_user_role: {
                                id: 'b45ac46436c14974b223c8bff451f7e8'
                                key: {
                                    name: 'x_2120492_athidhi.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'fa3d098fad734266ab0e015d0e4f8d8f'
                        key: {
                            name: 'x_2120492_athidhi_inventory_item'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'fa65dfd55b654bb68ab960c6b200ac94'
                        key: {
                            name: 'x_2120492_athidhi_inventory_item'
                            element: 'category'
                            value: 'food'
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: 'fa6eb115db414588a25b9cde1e32f513'
                        key: {
                            sys_ui_action: '755fb1e0d15b4ef6b4606dcded64be19'
                            sys_user_role: {
                                id: '8f68f11dd010432ba80972aa8ac2b77d'
                                key: {
                                    name: 'x_2120492_athidhi.housekeeping'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'fa7b739d63e64322a5a5e7e5f96cbeef'
                        key: {
                            sys_security_acl: '69b59c366920461e885266245f28b8ef'
                            sys_user_role: {
                                id: 'bd9b587c1f9047609d32f4eea97e73bb'
                                key: {
                                    name: 'x_2120492_athidhi.restaurant'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'fa87b351ccb9460e8fcba82cc8a35d02'
                        key: {
                            name: 'x_2120492_athidhi_housekeeping_task'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'faa2bbc6e7c44889a5cdf09d76de791a'
                        key: {
                            name: 'x_2120492_athidhi_stay'
                            element: 'room'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'faabf46e40674884944cc611c256feac'
                        key: {
                            sys_security_acl: '6a8c9187cf184c90be851afec19631f9'
                            sys_user_role: {
                                id: '7a58b2b3dd1e4586ad7b6fb331fb8788'
                                key: {
                                    name: 'x_2120492_athidhi.guest'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'facc52b110204209b767b8bb64faa066'
                        key: {
                            name: 'x_2120492_athidhi_ai_interaction_log'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'fb244e677bc34206bfe9534239c65301'
                        key: {
                            sys_security_acl: '89302a9c479b4cfdbf5ef4ccb17ff38e'
                            sys_user_role: {
                                id: 'b45ac46436c14974b223c8bff451f7e8'
                                key: {
                                    name: 'x_2120492_athidhi.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'fb2e879b178b405db33d7ab97f6b507c'
                        key: {
                            name: 'x_2120492_athidhi_food_order'
                            element: 'priority'
                            value: 'high'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'fb32d3456b934e65ba91b5fff0525c1f'
                        key: {
                            sys_security_acl: '21f02e1265084acba8a231b1153d60c4'
                            sys_user_role: {
                                id: '0e2c8b4a8bd0443fb576b6f6b6349fbe'
                                key: {
                                    name: 'x_2120492_athidhi.manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'fb364e40938a4cda91a3504a04c74e96'
                        key: {
                            name: 'x_2120492_athidhi_food_order_item'
                            element: 'quantity'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'fb794aadc70f470499ba05fce3faccbd'
                        key: {
                            name: 'x_2120492_athidhi_amenity'
                            element: 'category'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'fb797420d2034c5c9bbbda6908d7af3a'
                        key: {
                            sys_security_acl: '3c36adabd1ff4ef282011aee65e4e931'
                            sys_user_role: {
                                id: '3e9f6959b3014deca7ed1004952c0462'
                                key: {
                                    name: 'x_2120492_athidhi.maintenance'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'fb9b50d7e00947b8a1e6fb75243891ce'
                        key: {
                            name: 'x_2120492_athidhi_maintenance_request'
                            element: 'category'
                            value: 'appliance'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'fc206951a789433a811d91ff22f70b58'
                        key: {
                            sys_security_acl: '36ccf90d87a844ef90b2966b93f1da4a'
                            sys_user_role: {
                                id: 'b45ac46436c14974b223c8bff451f7e8'
                                key: {
                                    name: 'x_2120492_athidhi.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'fc3a46aad4a049c4a12bca30728abee2'
                        key: {
                            name: 'x_2120492_athidhi_guest_preference'
                            element: 'notes'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'fc44104fca6d40ac9fb7d70729de2ade'
                        key: {
                            name: 'x_2120492_athidhi_stay'
                            element: 'expected_check_out'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'fc44c5e1cb314e85a05927157eeb7a43'
                        key: {
                            sys_security_acl: '077776d5d7b84af0bf01347ad64e803e'
                            sys_user_role: {
                                id: 'b45ac46436c14974b223c8bff451f7e8'
                                key: {
                                    name: 'x_2120492_athidhi.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: 'fc60b1f32d6b439c9561333ce1ddc8d2'
                        key: {
                            sys_ui_action: '598cfda54d3f47d199355e2dc1dae114'
                            sys_user_role: {
                                id: 'b45ac46436c14974b223c8bff451f7e8'
                                key: {
                                    name: 'x_2120492_athidhi.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'fcb6ba449e1a426a836060ebe87c308a'
                        key: {
                            name: 'x_2120492_athidhi_amenity'
                            element: 'code'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'fccf754457ce492abe1e6bf2af1f98c5'
                        key: {
                            name: 'x_2120492_athidhi_staff_profile'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'fce0646908de44788d8202acab951432'
                        key: {
                            name: 'x_2120492_athidhi_guest'
                            element: 'phone'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'fe376d8dfd644bdc85edef5895633226'
                        key: {
                            name: 'x_2120492_athidhi_inventory_transaction'
                            element: 'transaction_date'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'fe739d6b156a46d5b786a14b2a205d08'
                        key: {
                            name: 'x_2120492_athidhi_amenity'
                            element: 'name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'fe7ad2ee20b84441beb9182d8221ff1b'
                        key: {
                            name: 'x_2120492_athidhi_restaurant'
                            element: 'name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'fe88508f60f340a7b3c1829d4c30869f'
                        key: {
                            name: 'x_2120492_athidhi_service_request'
                            element: 'assigned_to'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'fe9049e5f09745e0b6b52315d56e0eb7'
                        key: {
                            sys_security_acl: 'b404e16cd87f4ccaa1ad001e11f35d83'
                            sys_user_role: {
                                id: '7a58b2b3dd1e4586ad7b6fb331fb8788'
                                key: {
                                    name: 'x_2120492_athidhi.guest'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: 'fecea000316e491c8cf739e2e4b5da0a'
                        key: {
                            sys_ui_action: '1d2f24ed96fc49f181f74e1365382666'
                            sys_user_role: {
                                id: '240a492786cd43859dd397028582ac16'
                                key: {
                                    name: 'x_2120492_athidhi.receptionist'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'fee296cfd34f487a9ca6ad16cd593df2'
                        key: {
                            name: 'x_2120492_athidhi_room'
                            element: 'active'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'fefd09a58ed84fbea6921ea92d2b4bd1'
                        key: {
                            sys_security_acl: 'bed0bf7989584481a9b1467a8f9bcd6b'
                            sys_user_role: {
                                id: '3e9f6959b3014deca7ed1004952c0462'
                                key: {
                                    name: 'x_2120492_athidhi.maintenance'
                                }
                            }
                        }
                    },
                ]
            }
        }
    }
}
