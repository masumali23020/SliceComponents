import React from 'react';

const PaymentTable = () => {
    return (
        <div className="relative w-full overflow-auto">
            <table className="w-full caption-bottom text-sm">
                <thead className="[&_tr]:border-b">
                    <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                        <th className="h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]">
                            Header
                        </th>
                    </tr>
                </thead>
                <tbody className="[&_tr:last-child]:border-0">
                    <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                        <td className="p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]">
                            Data
                        </td>
                        <td className="p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]">
                            Data
                        </td>
                        <td className="p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]">
                            Data
                        </td>
                        <td className="p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]">
                            Data
                        </td>
                        <td className="p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]">
                            Data
                        </td>
                    </tr>
                </tbody>
                <tfoot className="border-t bg-muted/50 font-medium [&>tr]:last:border-b-0">
                    <tr>
                        <td>Footer</td>
                    </tr>
                </tfoot>
            </table>
            <caption className="mt-4 text-sm text-muted-foreground">
                Table Caption
            </caption>
        </div>
    );
};

export default PaymentTable;