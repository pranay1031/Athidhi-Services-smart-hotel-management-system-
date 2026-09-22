import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: '2a7e1488182246a28bf491ed93472661'
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
                    package_json: {
                        table: 'sys_module'
                        id: '603423a190c34cb491fb7ba85cdbce1c'
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
                    prop_gemini_model: {
                        table: 'sys_properties'
                        id: '3dd598c6d41d429e875cb7ac2f772ec2'
                    }
                    prop_hotel_name: {
                        table: 'sys_properties'
                        id: '66736da279d343dabe8c2718b3c39cc4'
                    }
                    src_server_logger_ts: {
                        table: 'sys_module'
                        id: 'c744383895114b26823aec5c95907b2d'
                    }
                    src_server_script_ts: {
                        table: 'sys_module'
                        id: 'eb7462528de74158990aa407e130c90a'
                        deleted: true
                    }
                }
                composite: [
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
                        table: 'sys_user_role'
                        id: '0e2c8b4a8bd0443fb576b6f6b6349fbe'
                        key: {
                            name: 'x_2120492_athidhi.manager'
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
                        table: 'sys_user_role'
                        id: '3e9f6959b3014deca7ed1004952c0462'
                        key: {
                            name: 'x_2120492_athidhi.maintenance'
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
                        table: 'sys_user_role'
                        id: '8f68f11dd010432ba80972aa8ac2b77d'
                        key: {
                            name: 'x_2120492_athidhi.housekeeping'
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
                        table: 'sys_user_role'
                        id: 'b45ac46436c14974b223c8bff451f7e8'
                        key: {
                            name: 'x_2120492_athidhi.admin'
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
                ]
            }
        }
    }
}
