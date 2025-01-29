import {Tabs, TabsContent, TabsList, TabsTrigger} from "~/components/ui/tabs";
import type { Route } from "./+types/editor";
import React, {useEffect} from "react";
import {Textarea} from "~/components/ui/textarea";
import {Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow} from "~/components/ui/table";
import {useTableStore} from "~/store/tableStore";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Research React Router" },
        { name: "description", content: "Welcome to Research React Router!" },
    ];
}

export default function Editor() {

    const {
        data,
        setTable,
    } = useTableStore()

    useEffect(() => {
        console.log(`Table data: ${data}`)
        console.log(`Table data: ${data}`)
    }, [data])

    const value = {
        data,
        setTable: (data: string) => {
            setTable(data)
        },
    }

    return (
        <div>
            <Tabs defaultValue="account" className="w-full">
                <TabsList>
                    <TabsTrigger value="editor">Editor</TabsTrigger>
                    <TabsTrigger value="preview">Preview</TabsTrigger>
                </TabsList>
                <TabsContent value="editor">
                    <Textarea value={data} className="w-full h-40 resize-none overflow-auto border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white h-[48rem]" />
                </TabsContent>
                <TabsContent value="preview">
                    <Table>
                        <TableCaption>Data Table</TableCaption>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Invoice</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Method</TableHead>
                                <TableHead>Amount</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell className="font-medium">INV001</TableCell>
                                <TableCell>Paid</TableCell>
                                <TableCell>Credit Card</TableCell>
                                <TableCell className="text-right">$250.00</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TabsContent>
            </Tabs>
        </div>
    );
}
