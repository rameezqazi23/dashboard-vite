import React, { useState } from "react";
import {
    BadgeDelta,
    Button,
    Card,
    DonutChart,
    Flex,
    TabGroup,
    Tab,
    TabList,
    Bold,
    Divider,
    List,
    ListItem,
    Metric,
    Text,
    Title,
} from "@tremor/react";
import {
    ArrowRightIcon,
    ChartPieIcon,
    ViewListIcon,
} from "@heroicons/react/outline";

const stocks = [
    {
        name: "Off Running AG",
        value: 10456,
        performance: "6.1%",
        deltaType: "increase",
    },
    {
        name: "Not Normal Inc.",
        value: 5789,
        performance: "1.2%",
        deltaType: "moderateDecrease",
    },
    {
        name: "Logibling Inc.",
        value: 4367,
        performance: "2.3%",
        deltaType: "moderateIncrease",
    },
    {
        name: "Raindrop Inc.",
        value: 3421,
        performance: "0.5%",
        deltaType: "moderateDecrease",
    },
    {
        name: "Mwatch Group",
        value: 1432,
        performance: "3.4%",
        deltaType: "decrease",
    },
];

const dataFormatter = (number) => {
    return "$ " + Intl.NumberFormat("us").format(number).toString();
};


const SalesItemCard = () => {
    const [selectedItem, setSelectedItem] = useState(0);
    return (
        <Card className="max-w-full mx-auto">
            <Flex className="space-x-8 flex-col lg:flex-row">
                <Title>Overview</Title>
                <TabGroup index={selectedItem} onIndexChange={setSelectedItem}>
                    <TabList variant="solid">
                        <Tab icon={ChartPieIcon}>Chart</Tab>
                        <Tab icon={ViewListIcon}>List</Tab>

                    </TabList>
                </TabGroup>

            </Flex>
            <Text className="mt-8">Protfolio Value</Text>
            <Metric>$ 78,989</Metric>
            <Divider />
            <Text className="mt-8">
                <Bold>Asset Allocation</Bold>
            </Text>
            <Text>Asset Class 1 - 5 holdings</Text>
            {selectedItem === 0 ?
                (
                    <DonutChart
                        data={stocks}
                        valueFormatter={dataFormatter}
                        showAnimation={true}
                        category="value"
                        index="name"
                        className="mt-8"
                    />


                )
                :
                (
                    <>
                        <Flex className="mt-8" justifyContent="between">
                            <Text className="truncate">
                                <Bold>Stocks</Bold>
                            </Text>
                            <Text>Since Transactions</Text>
                        </Flex>

                        <List>
                            {stocks.map((item, index) => (
                                <ListItem key={index}>
                                    <Text>{item.name}</Text>
                                    <Flex className="space-x-2" justifyContent="end">
                                        <Text>
                                            ${Intl.NumberFormat("us").format(item.value).toString()}
                                        </Text>

                                    </Flex>


                                </ListItem>
                            ))}
                        </List>
                    </>
                )
            }

            <Flex className="pt-6 mt-4 border-t">
                <Button size="xs" variant="light" icon={ArrowRightIcon} iconPosition="right">View more</Button>
            </Flex>

        </Card>
    )
}

export default SalesItemCard;
