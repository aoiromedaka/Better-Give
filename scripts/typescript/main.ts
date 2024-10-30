import { Container, Entity, EntityComponentTypes, EntityInventoryComponent, ItemLockMode, ItemStack, system, world } from "@minecraft/server";

system.afterEvents.scriptEventReceive.subscribe(ev => {
    if (ev.id === "bettergive:give") {
        const args: string[] = ev.message.split(" ");

        if (args[0] !== "") {
            const item = new ItemStack(args[0]);


            if (args.length >= 2) {
                item.amount = Number(args[1]);
    
                if (args.length >= 3) {
                    item.keepOnDeath = stringToBoolean(args[2]);
    
                    if (args.length >= 4) {
                        item.lockMode = stringToItemLockMode(args[3]);
                    }
                }
    

            }

            const source: Entity | undefined = ev.sourceEntity;
            if (source !== undefined) {
                const inventory = source.getComponent(EntityComponentTypes.Inventory) as EntityInventoryComponent;
                inventory.container?.addItem(item);
                source.runCommand(`say @s ${ev.message}`)
            }
        }
    }
})

function stringToBoolean(booleanStr: string): boolean {
    return booleanStr.toLocaleLowerCase() === "true"
}

function stringToItemLockMode(ItemLockModeStr: string): ItemLockMode {
    if (ItemLockModeStr === "none") {
        return ItemLockMode.none;
    }
    else if (ItemLockModeStr === "inventory"){
        return ItemLockMode.inventory;
    }
    else if(ItemLockModeStr === "slot") {
        return ItemLockMode.slot;
    }
    return ItemLockMode.none
}