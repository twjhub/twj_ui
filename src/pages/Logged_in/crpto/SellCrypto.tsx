import { useEffect, useState } from "react";
import CustomSelect from "../../../components/CustomSelect";
import Bitcoin from "../../../assets/crpto_icons/Btc-coin.757f6cb3 2.svg";
import Eth from "../../../assets/crpto_icons/ETH-b-coin.eac01ea4 1.svg";
import warning from "../../../assets/crpto_icons/warning_c.svg";
// import NoWalletWarning from "../../../assets/crpto_icons/icon_nowallet.png";
import DOGE from "../../../assets/crpto_icons/Doge-coin.de2aebc7 1.svg";
import USDT from "../../../assets/crpto_icons/USDT-b-coin.9404ef8d 1.svg";
import BITCOIN from "../../../assets/crpto_icons/BITCOIN.svg";
import ETHER from "../../../assets/crpto_icons/ETHER.svg";
import positive from "../../../assets/crpto_icons/positive.svg";
import negative from "../../../assets/crpto_icons/negative.svg";
import QR from "../../../assets/crpto_icons/qrcodee.svg";
import copy from "../../../assets/crpto_icons/Copy_lightC.svg";
import warRed from "../../../assets/crpto_icons/warn_red.svg";
import { NavLink } from "react-router";
import { FaArrowLeft } from "react-icons/fa6";
import { Wallet } from "../../../types/types.ts";
import btc from "../../../assets/crpto_icons/wallet_icons/Bitcoin.svg";
import eth from "../../../assets/crpto_icons/wallet_icons/Ethereumm.svg";
import usdt from "../../../assets/crpto_icons/wallet_icons/usdt.svg";
import bnb from "../../../assets/crpto_icons/wallet_icons/Binace_coin.svg";
import sol from "../../../assets/crpto_icons/wallet_icons/solana.svg";
import usdc from "../../../assets/crpto_icons/wallet_icons/USDC.svg";
import trx from "../../../assets/crpto_icons/wallet_icons/Tron.svg";
import ton from "../../../assets/crpto_icons/wallet_icons/ton_coin.svg";
import placeholder from "../../../assets/crpto_icons/no_address.svg";
import { useUserStore } from "../../../store/useUserStore";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import api from "../../../services/api.ts";
import SuccessModal from "../SuccessModal.tsx";

const options = [
  {
    id: "btc",
    label: "Bitcoin",
    value: "btc_backend_id_123",
    displayValue: ".102 BTC",
    image: Bitcoin,
  },
  {
    id: "eth",
    label: "Ethereum",
    value: "eth_backend_id_456",
    displayValue: ".504 ETH",

    image: Eth,
  },
];

const cryptoData = [
  {
    id: "btc",
    shortName: "BTC",
    fullName: "Bitcoin",
    priceNGN: "₦75,300,000",
    percentChange: 2.15,
    image: BITCOIN,
  },
  {
    id: "eth",
    shortName: "ETH",
    fullName: "Ethereum",
    priceNGN: "₦4,580,000",
    percentChange: -1.32,
    image: ETHER,
  },
  {
    id: "usdt",
    shortName: "USDT",
    fullName: "Tether",
    priceNGN: "₦1,320",
    percentChange: 0.05,
    image: USDT,
  },
  {
    id: "usdc",
    shortName: "DOGE",
    fullName: "Doge",
    priceNGN: "₦1,310",
    percentChange: -0.12,
    image: DOGE,
  },
];

export type Optiontype = {
  id: string;
  label: string;
  value: string;
  image?: string;
  displayValue?: string;
};

const SellCrypto = () => {
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const [wallets, setWallets] = useState<Wallet[]>([]);
  const [selectOptions, setSelectOptions] = useState<Optiontype[]>([]);
  const [selectedCoin, setSelectedCoin] = useState<Optiontype>(options[0]);
  // const [currencyCode, setCurrencyCode] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [successModal, setSuccessModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [networkOptions, setNetworkOptions] = useState<Optiontype[]>([]);
  // const [selectedNetwork, setSelectedNetwork] = useState<Optiontype | null>(
  //   null
  // );
  const [selectedNetwork, setSelectedNetwork] = useState<
    Optiontype | undefined
  >(undefined);

  const BASE_URL = import.meta.env.VITE_BASE_URL;

  const currencyIcons: Record<string, string> = {
    btc,
    eth,
    usdt,
    usdc,
    bnb,
    sol,
    trx,
    ton,
  };

  const allowedCurrencies = [
    "btc",
    "usdt",
    "eth",
    "usdc",
    "bnb",
    "sol",
    "trx",
    "ton",
  ];

  const userSubAccountId = useUserStore(
    (state) => state.user?.userSubAccountId
  );

  const {
    // user,
    fetchUser,
    // loading,
    // error
  } = useUserStore();

  const fetchWallets = async (userId: string) => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${BASE_URL}/Crypto/users/wallets?userId=${userId}`
      );

      const rawResponse: Wallet[] = response.data?.data?.data;

      const filteredWallets = rawResponse.filter((wallet) =>
        allowedCurrencies.includes(wallet.currency.toLowerCase())
      );

      setWallets(filteredWallets);
    } catch (err) {
      // Optional: setError("Failed to fetch wallets");
      return err;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
    if (userSubAccountId) {
      fetchWallets(userSubAccountId);
    }
  }, [userSubAccountId]);

  useEffect(() => {
    if (wallets.length > 0) {
      const options = wallets.map((wallet) => ({
        id: wallet.id,
        label: wallet.name,
        value: wallet.currency,
        image: currencyIcons[wallet.currency.toLowerCase()],
        displayValue: wallet.deposit_address,
      }));
      setSelectOptions(options);
      setSelectedCoin(options[0]);
    }
  }, [wallets]);

  // Full wallet address
  const fullAddress = selectedCoin.displayValue;

  const handleCopy = () => {
    if (!fullAddress) return;
    navigator.clipboard.writeText(fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const handleSelection = (selected: Optiontype) => {
    setSelectedCoin(selected);
    // setCurrencyCode(selected.value);
    // console.log("loading:", loading);
    // console.log("selectedCoin.value:", selected.value);
  };

  // network logic

  useEffect(() => {
    updateNetworksForCoin(selectedCoin);
  }, [selectedCoin, wallets]);

  type OptionType = {
    label: string;
    value: string;
  };

  const updateNetworksForCoin = (coin: OptionType | null) => {
    if (!coin) {
      setNetworkOptions([]);
      setSelectedNetwork(undefined);
      return;
    }

    const selectedWallet = wallets.find(
      (wallet) => wallet.currency.toLowerCase() === coin.value
    );

    if (selectedWallet) {
      const networks = selectedWallet.networks || [];
      const formattedNetworks = networks.map((net) => ({
        id: net.id,
        label: net.id,
        value: net.id,
      }));
      setNetworkOptions(formattedNetworks);
      setSelectedNetwork(formattedNetworks[0] || null);
    } else {
      setNetworkOptions([]);
      setSelectedNetwork(undefined);
    }
  };

  // create wallet

  const handleCreateWallet = async () => {
    if (!selectedCoin?.value) return;
    setError("");

    setIsLoading(true);

    try {
      const response = await api.post(
        `/Crypto/users/creatPaymentAddress?userId=${userSubAccountId}&currency=${selectedCoin.value}&network=${selectedNetwork?.id}`
      );

      // If backend returns custom status logic
      if (response?.data?.statusCode && response.data.statusCode !== "OK") {
        throw new Error(response.data.message || "Failed to create wallet");
      }

      setSuccessMessage(
        response?.data?.message || "Wallet created successfully."
      );
      setSuccessModal(true);
    } catch (error: any) {
      // Axios error handling
      const errorMessage =
        error?.response?.data?.message ||
        error?.message ||
        "An unexpected error occurred while creating the wallet.";

      setError(errorMessage);
      // console.error("Create wallet failed:", errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  // const isDisabled = loading && !!selectedCoin != "";

  return (
    <>
      {successModal && (
        <SuccessModal
          title=""
          message={
            successMessage
              ? successMessage
              : "Your verification details have been submitted successfully."
          }
          onClose={() => {
            setSuccessModal(false);
            if (!userSubAccountId) return;
            fetchWallets(userSubAccountId);
          }}
        />
      )}
      <div className="w-full overflow-hidden h-[calc(100vh-5.2rem)] mr-[2rem] mt-[5rem] rounded-tl-[30px] bg-[#fff] flex flex-col">
        <div className="flex-1 overflow-y-auto p-4 ">
          <div className="flex justify-center items-center">
            <div className=" w-full  p-4">
              <div className="flex justify-start items-center mb-2">
                <NavLink className="flex items-center gap-1 " to="/crypto">
                  <FaArrowLeft className="text- cursor-pointer" />
                  <p className="text-[15px]">Back</p>
                </NavLink>
              </div>

              <div className="w-full grid [grid-template-columns:45%_55%]   ">
                {/* Left section */}
                <div className=" ">
                  <div className="flex flex-col">
                    <p className="pt-3 mb-1 text-[14px] text-[#000]">
                      Select Cryptocurrency Asset
                    </p>

                    {loading ? (
                      <div className="px-4  text-sm truncate w-full">
                        <Skeleton width={`100%`} height={"2rem"} />
                      </div>
                    ) : (
                      <>
                        <div className="w-full border border-gray-300 rounded-md focus-within:border-2 focus-within:border-gray-300">
                          <CustomSelect
                            options={selectOptions}
                            value={selectedCoin}
                            placeholder="Choose a coin"
                            inputWidth="w-full"
                            optionsWidth="w-full"
                            borderColor="border-gray-300"
                            backgroundColor="#fff"
                            // displayValue={true}
                            px="px-2"
                            py="py-3"
                            textSize="text-[15px]"
                            onChange={handleSelection}
                          />
                        </div>
                      </>
                    )}
                  </div>

                  <div className="flex justify-between  mt-[0.5rem]   items-center">
                    <p className="pt-2 pb-1 text-[14px] text-[#000]">
                      Network <span className="text-gray-400">(Optional)</span>
                    </p>
                  </div>

                  <div className="w-full border border-gray-300 rounded-md focus-within:border-2 focus-within:border-gray-300">
                    <CustomSelect
                      options={networkOptions}
                      value={selectedNetwork}
                      onChange={(val) => setSelectedNetwork(val)}
                      placeholder="Select Network"
                      inputWidth="w-auto"
                      optionsWidth="w-full"
                      px="px-2"
                      py="py-4"
                      textSize="text-[15px]"
                      borderColor="border-gray-300"
                      backgroundColor="#fff"
                      optionsPx="px-1"
                      optionsPy="py-1"
                    />
                  </div>

                  <div className="flex justify-center items-center px-7 py-3 mt-4 rounded-[10px] w-full bg-[#FBEEFF] ">
                    <div className="flex items-center  gap-3 justify-center ">
                      <img src={warning} alt="" />
                      <p className="leading-[0.9rem] text-[#8003A9] text-left text-[13px]">
                        Your wallet will automatically be credited with Naira
                        after confirmations on your transaction.
                      </p>
                    </div>
                  </div>

                  {error && (
                    <p className="text-red-500 text-left mt-3 mb-[-1rem] text-[13px] ">
                      {error}
                    </p>
                  )}

                  <div className="w-full flex mt-9 justify-end">
                    <div className="flex items-center gap-3">
                      <NavLink
                        to="/crypto/swapcrypto"
                        className="border-[2px] cursor-pointer  text-[#8003A9] px-[2rem] py-[0.8rem] text-[16px] font-semibold rounded-[5px]"
                      >
                        Swap Asset
                      </NavLink>
                      <button
                        onClick={handleCreateWallet}
                        disabled={loading || !!selectedCoin?.displayValue}
                        className={`border-[2px] border-[#8003A9] bg-[#8003A9] text-[#fff] px-[2rem] py-[0.8rem] text-[16px] font-semibold rounded-[5px] ${
                          loading || !!selectedCoin?.displayValue
                            ? "opacity-50 cursor-not-allowed"
                            : " cursor-pointer"
                        }`}
                      >
                        {isLoading ? (
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        ) : (
                          "Create Wallet"
                        )}
                      </button>
                    </div>
                  </div>

                  <div>
                    <div className="mt-7">
                      <p className=" text-[19px] font-[500]">Market</p>
                    </div>

                    <div className="w-full border  px-5 py-4 mt-2 border-[#8A95BF] rounded-md overflow-hidden">
                      {cryptoData.map((coin, index) => (
                        <div
                          key={coin.id}
                          className={`flex justify-between items-center  py-3 ${
                            index !== cryptoData.length - 1 ? "border-b" : ""
                          } border-[#8A95BF]`}
                        >
                          {/* Left: Coin Image + Name */}
                          <div className="flex items-center gap-3">
                            <img
                              src={coin.image}
                              alt={coin.fullName}
                              className="w-8 h-8"
                            />
                            <div className="leading-tight">
                              <p className="text-[15px]">{coin.shortName}</p>
                              <p className="text-[12px] text-gray-500">
                                {coin.fullName}
                              </p>
                            </div>
                          </div>

                          {/* Right: Price + Change */}
                          <div className="text-right leading-tight flex flex-col items-end">
                            <p className="text-[15px]">{coin.priceNGN}</p>
                            <p
                              className={`text-sm flex items-center gap-1 ${
                                coin.percentChange >= 0
                                  ? "text-green-500"
                                  : "text-red-500"
                              }`}
                            >
                              <img
                                src={
                                  coin.percentChange >= 0 ? positive : negative
                                }
                                alt={
                                  coin.percentChange >= 0
                                    ? "positive"
                                    : "negative"
                                }
                                className="w-3 h-3"
                              />
                              {coin.percentChange}%
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right section */}
                <div className=" relative mt-[-3rem] ml-5 w-full h-full flex justify-center items-center ">
                  <div className="border border-[#8A95BF] rounded-[10px] bg-[#F5F7FA] w-[85%] border-dashed">
                    {loading ? (
                      <>
                        <div className="flex justify-center items-center mt-15">
                          <Skeleton height={180} width={180} />
                        </div>

                        <div className="mt-10 px-[3rem] w-full max-w-md">
                          <p className="mb-[-6px]">
                            <Skeleton width={120} />
                          </p>

                          <div className="flex my-[0.7rem] items-center w-full border border-[#8A95BF] rounded-md overflow-hidden">
                            <div className="px-4 py-2 text-sm truncate w-full">
                              <Skeleton width={`100%`} />
                            </div>

                            <div className="p-3">
                              <Skeleton circle height={24} width={24} />
                            </div>
                          </div>

                          <div className="mt-6">
                            <Skeleton count={2} />
                          </div>
                        </div>

                        <div className="px-[2rem] mb-[2rem]">
                          <Skeleton height={60} />
                        </div>
                      </>
                    ) : selectedCoin.displayValue ? (
                      <>
                        <div className="flex justify-center items-center mt-15">
                          <img src={QR} alt="qr code" />
                        </div>

                        <div className="mt-10 px-[3rem]">
                          <p className="mb-[-6px]">Wallet Address</p>

                          <div className="flex my-[0.7rem] items-center w-full max-w-md border border-[#8A95BF] rounded-md overflow-hidden">
                            <div className="px-4 py-2 text-sm text-gray-700 truncate w-full">
                              {fullAddress}
                            </div>

                            <button
                              onClick={handleCopy}
                              className="bg-[#8003A9] cursor-pointer hover:bg-[#6c028b] text-white p-3 flex items-center justify-center"
                              title="Copy address"
                            >
                              <img src={copy} alt="" />
                            </button>
                          </div>

                          {copied && (
                            <span className="absolute bottom-[20px] right-[5rem] text-[13px] text-green-600 font-medium">
                              Copied!
                            </span>
                          )}
                        </div>

                        <div className="px-[2rem] mb-[2rem]">
                          <div className="flex justify-center items-center px-7 py-3 mt-4 rounded-[10px] w-full bg-[#FFEEF2]">
                            <div className="flex items-center gap-3 justify-center">
                              <img src={warRed} alt="" />
                              <p className="leading-[0.9rem] text-[#27014F] text-left text-[13px]">
                                Sending less than $10 will result in receiving
                                credit at a significantly lower exchange rate.
                              </p>
                            </div>
                          </div>
                        </div>
                      </>
                    ) : (
                      // Placeholder fallback when no selectedCoin
                      <>
                        <div className="flex justify-center items-center">
                          <div className="flex flex-col my-[4rem] items-center justify-center">
                            <img src={placeholder} className="" alt="" />

                            <div className="px-[2rem] mt-[2rem]">
                              <div className="flex justify-center items-center px-7 py-3 mt-4 rounded-[10px] w-full bg-[#FFEEF2]">
                                <div className="flex items-center gap-3 justify-center">
                                  <img
                                    src={warRed}
                                    className="w-[2rem]"
                                    alt=""
                                  />
                                  <p className="leading-[0.9rem] text-[#27014F] text-left text-[13px]">
                                    No wallet yet! Create one to receive crypto.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SellCrypto;
