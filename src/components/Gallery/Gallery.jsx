import React, { useState, useEffect } from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import Data from "../../assets/behance_data.json";
import ModalWithImage from "../Modal/ModalWithImage";

const Gallery = () => {
  const [data, setData] = useState([]);
  const [activeTab, setActiveTab] = useState(0);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Ordena os dados de forma decrescente pelo ID antes de armazená-los no estado
    const sortedData = [...Data].sort((a, b) => b.id - a.id);
    setData(sortedData);
  }, []);

  const handleOpen = (item) => {
    setSelectedItem(item);
    setIsOpen(true);
  };

  const handleClose = () => {
    setSelectedItem(null);
    setIsOpen(false);
  };

  return (
    <div className="p-6">
      <Tabs value={activeTab} onChange={(value) => setActiveTab(value)}>
        <TabsHeader>
          <Tab value={0} className="text-[#db5375]">
            Quadrinhos
          </Tab>
          <Tab value={1} className="text-[#db5375]">
            Design
          </Tab>
          <Tab value={2} className="text-[#db5375]">
            Ilustrações
          </Tab>
        </TabsHeader>

        <TabsBody>
          {[0, 1, 2].map((tabValue) => (
            <TabPanel
              key={tabValue}
              value={tabValue}
              className="grid grid-cols-1 gap-4 md:grid-cols-2 w-full lg:grid-cols-3 justify-items-center"
            >
              {data
                .filter((item) => item.category === tabValue)
                .map((item) => (
                  <div
                    key={item.id}
                    className="cursor-pointer"
                    onClick={() => handleOpen(item)}
                  >
                    <img
                      src={item.profile}
                      alt={`Profile ${item.id}`}
                      className="w-full h-auto object-cover rounded-lg"
                    />
                  </div>
                ))}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>

      <ModalWithImage
        isOpen={isOpen}
        onClose={handleClose}
        selectedItem={selectedItem}
      />
    </div>
  );
};

export default Gallery;
